function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  function introductionWithLanguage(name, language) {
    switch (language) {
      case 'Ember.js':
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
      case 'Aki':
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
      default:
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    }
  }
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
