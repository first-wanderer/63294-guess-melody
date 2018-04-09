class Fixture {
  constructor(...fields) {
    if (!fields || fields.length < 1) {
      throw new Error(`Fields weren't passed.`);
    }

    this._fields = fields;
  }

  getTestObject(...fieldsValues) {
    const testObject = {};

    if (fieldsValues) {
      this._fields.forEach((element, index) => {
        testObject[element] = fieldsValues[index];
      });
    }

    return testObject;
  }
}

export default Fixture;
