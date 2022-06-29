const matchersInput = process.env.INPUT_MATCHERS;

if (!matchersInput) {
    return;
}

const matchers = matchersInput.split(",");

if (matchers.length === 0) {
    console.log(`::warning::no matcher is found`);
    return
}

for (const matcher of matchers) {
    const lowerMatcher = matcher.toLowerCase();

    switch (lowerMatcher) {
        case 'kotlin_gradle':
        case 'android_lint_gradle':
        case 'junit_gradle':
            console.log(`::debug::${matcher} is allowed`);
            console.log(`::add-matcher::${process.env.GITHUB_ACTION_PATH}/${lowerMatcher}/problem_matcher.json`);
            break;
        default:
            console.log(`::warning::${matcher} is unknown`);
            break;
    }
}