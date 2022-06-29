const inputs = {
    matchers: (process.env.INPUT_MATCHERS || '').toLowerCase().split(","),
    exclude: (process.env.INPUT_EXCLUDE || '').toLowerCase() === 'true',
}

if (!inputs.exclude && inputs.matchers.length === 0) {
    console.log(`::warning::no matcher is found`);
    return;
}

const ALL_MATCHERS = [
    'android_lint_gradle',
    'junit_gradle',
    'kotlin_gradle',
]

const targetMatchers = inputs.exclude ? ALL_MATCHERS : inputs.matchers;

for (const matcher of targetMatchers) {
    if (inputs.exclude) {
        if (inputs.matchers.indexOf(matcher) >= 0) {
            console.log(`${matcher} is excluded`);
            continue
        }
    }

    if (ALL_MATCHERS.indexOf(matcher) >= 0) {
        console.log(`${matcher} is allowed`);
        console.log(`::add-matcher::./${matcher}/problem_matcher.json`);
    } else {
        console.log(`::warning::${matcher} is unknown`);
    }
}