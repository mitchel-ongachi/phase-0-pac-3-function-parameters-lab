function introduction(Aki){
    return `Hi, my name is ${Aki}.`;
}

function introductionWithLanguage(name, language){
    if (language==='Ember.js'){
        return "Hi, my name is Aki and I am learning to program in Ember.js."
    }
    else if (language==='react'){
        return "Hi my name is Samip and I  am learning to program in React."
    }
    introductionWithLanguage('Samip','react');
    
}function introductionWithLanguageOptional(name, language='Python'){
    return 'Hi, my name is Gracie and I am learning to program in Python.';
}

