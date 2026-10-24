const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const context = vm.createContext({
  state: {}, render(){}, openMission(){}, missionForm(){},
  document: {addEventListener(){}},
});
const source = fs.readFileSync('explorer.js','utf8').replace(/render\(\);\s*$/, '');
vm.runInContext(source + '\nthis.api={questions:explorerQuestions,areas:careerAreas,rankedAreas,qualifies};', context);
const {questions, areas, rankedAreas, qualifies} = context.api;
assert.equal(questions.length,50);
assert.equal(new Set(questions.map(q=>q.id)).size,50);
assert.equal(new Set(questions.map(q=>q.text)).size,50);
assert.equal(areas.length,6);
for(const q of questions)context.state.explorer.answers[q.id]=2;
assert.ok(rankedAreas().every(a=>a.mean===2),'Equal interest must normalize equally across 8/9 question groups');
for(const q of questions)context.state.explorer.answers[q.id]=q.area==='science'?4:0;
assert.equal(rankedAreas()[0].id,'science');
assert.equal(rankedAreas()[0].signals.length,8);
context.state.learner={mode:'grade',value:6};
assert.equal(qualifies('design'),true);
assert.equal(qualifies('dev'),false);
assert.equal(qualifies('business'),false);
context.state.learner={mode:'grade',value:9};
assert.equal(qualifies('business'),true);
context.state.learner={mode:'age',value:10};
assert.ok(['dev','design','business'].every(id=>!qualifies(id)));
context.state.learner={mode:'age',value:12};
assert.equal(qualifies('dev'),true);
assert.equal(qualifies('business'),false);
context.state.learner={mode:'age',value:14};
assert.equal(qualifies('business'),true);
assert.equal(qualifies('business','grade-6'),false);
console.log('Verified: 50 unique questions, normalized recommendations, and grade/age eligibility boundaries.');

