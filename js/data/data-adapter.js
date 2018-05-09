import {QuestionType} from './game-data';
import ResourceModel from '../models/resource-model';

export default class DataAdapter {
  static getAllAudioUrls(questions) {
    let audioUrls = new Set();

    questions.forEach((question) => {
      switch (question.type) {
        case QuestionType.ARTIST:
          audioUrls.add(question.src);
          break;
        case QuestionType.GENRE:
          question.answers.forEach((answer) => {
            audioUrls.add(answer.src);
          });
          break;
        default:
          throw new Error(ResourceModel.getStringByAlias(`unknownQuestionError`));
      }
    });

    return Array.from(audioUrls);
  }

  static adaptServerData(serverData) {
    const adaptedQuestions = serverData.map((serverQuestion) => {
      let question;

      switch (serverQuestion.type) {
        case QuestionType.ARTIST:
          question = DataAdapter._adaptArtistQuestion(serverQuestion);
          break;
        case QuestionType.GENRE:
          question = serverQuestion;
          break;
        default:
          throw new Error(ResourceModel.getStringByAlias(`unknownQuestionError`));
      }

      return question;
    });

    return adaptedQuestions;
  }

  static _adaptArtistQuestion(serverQuestion) {
    const {type, question, src, answers} = serverQuestion;
    let rightAnswer;

    const adaptedAnswers = answers.map((serverAnswer) => {
      if (serverAnswer.isCorrect) {
        rightAnswer = serverAnswer.title;
      }

      return {
        artist: serverAnswer.title,
        image: serverAnswer.image.url
      };
    });

    return {
      type,
      question,
      src,
      rightAnswer,
      answers: adaptedAnswers
    };
  }
}
