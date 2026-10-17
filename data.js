const option=(text,kind,focus,evidence,why)=>({text,kind,focus,evidence,why});
const question=(skill,prompt,correct,options)=>({skill,prompt,correct,options});
const repair=(original,prefix,options,correct,feedback,evidence)=>({original,prefix,options,correct,feedback,evidence});
const scenario=(title,claim,finding,answer,why,evidence)=>({title,claim,finding,answer,why,evidence});
export const roles=[{id:'evidence',name:'Supporting reason',hint:'What gives the conclusion a reason to be accepted?'},{id:'assumption',name:'Underlying assumption',hint:'What unstated bridge does the argument depend on?'},{id:'conclusion',name:'Main conclusion',hint:'What position is the author defending?'},{id:'objection',name:'Objection',hint:'What challenge does the author consider?'},{id:'response',name:'Response',hint:'How does the author answer that challenge?'}];
export const passages=[
{
 id:'museum',number:'01',category:'HUMANITIES · CULTURAL INSTITUTIONS',short:'The public museum',title:'A collection is not yet a public.',subtitle:'Ownership, access, and the purpose of a museum.',accent:'#766182',
 paragraphs:[
 [
 'A museum is often judged by what it possesses: the rarity of its paintings, the completeness of its collections, or the distinction of the names attached to its galleries.',
 'Such judgments are understandable, since objects can survive their original settings only when someone accepts the expense and discipline of looking after them.',
 'Yet the movement of an object from a private collection into an institutional one does not, by itself, establish that the public has gained something it can meaningfully use.',
 'Legal ownership answers the question of who may control an object; the public purpose of a museum requires a further account of what that control makes possible.'
 ],[
 'A painting displayed behind an open door may remain inaccessible to visitors who have no way of understanding why its unfamiliar conventions once mattered.',
 'Interpretation can give those visitors a point of entry without dictating the judgments they must eventually make, much as a conversation can begin with an explanation without ending in agreement.',
 'Access, in this richer sense, is the opportunity to encounter and interpret a collection, rather than merely the opportunity to stand in its physical vicinity.',
 'Attendance is therefore a useful but incomplete measure: a crowded exhibition may produce little sustained engagement, while a modestly attended program may open an enduring line of inquiry.'
 ],[
 'Defenders of collecting object that an institution cannot make its holdings available to future visitors unless it first secures and preserves those holdings.',
 'This objection identifies a real condition of public access, and it would be foolish to treat conservation as a dispensable luxury whenever another activity attracts more immediate attention.',
 'An object that is allowed to decay cannot indefinitely support the encounters that advocates of access wish to encourage.',
 'Nevertheless, establishing a necessary condition for a public purpose is different from showing that the condition, once met, is sufficient to fulfill that purpose.'
 ],[
 'Imagine a museum choosing between acquiring another prestigious object that would remain largely uninterpreted and improving the presentation of objects it already owns.',
 'If the latter option enables previously excluded visitors to engage with the collection, the acquisition cannot claim priority simply because it enlarges an inventory or attracts a celebrated donor.',
 'An acquisition might still deserve priority when it fills a significant interpretive gap, connects neglected histories, or makes possible encounters that existing holdings cannot support.',
 'The relevant distinction is consequently not between collecting and refusing to collect, but between decisions justified by public opportunities and decisions justified only by institutional accumulation.'
 ],[
 'No single visitor count or acquisition total can settle such decisions, because these figures leave unanswered questions about the character of the encounters a museum enables.',
 'The institution must ask who can participate, what its choices allow people to understand, and which plausible alternative uses of its resources would better serve that work.',
 'Its public responsibility is fulfilled through the opportunities its collection makes available, not exhausted by the fact that the collection belongs to an institution bearing a public name.',
 'To recognize this responsibility is to give collecting a demanding justification, rather than to deny that collecting can be justified at all.'
 ]],
 questions:[
 question('Foundations of comprehension','Which statement best captures the author’s central position?',1,[
 option('Public museums should abandon the acquisition of additional objects.','Overstatement','abandon',[15,20],'The author explicitly permits justified acquisitions. A demand for a better justification is not a prohibition on collecting.'),
 option('Museum decisions should be judged by the opportunities they create for public engagement and understanding.','Supported synthesis','opportunities',[7,19],'Sentence 7 defines meaningful access; sentence 19 makes such opportunities the measure of public responsibility. Together they support the central position.'),
 option('Attendance figures are the most reliable measure of a museum’s public value.','Reversal','most reliable',[8,17],'The passage treats attendance as useful but incomplete and rejects any single count as decisive. This choice turns a limited indicator into the author’s preferred standard.'),
 option('A museum fulfills its public purpose whenever experts preserve its collection.','Necessary → sufficient','whenever',[11,12],'Preservation enables future encounters, but the author expressly distinguishes that necessary condition from fulfillment of the wider public purpose.')
 ]),
 question('Reasoning within the text','What role does the objection about preservation play in the argument?',2,[
 option('It expresses a position the author dismisses as irrelevant to public access.','Misattribution','dismisses',[9,10],'The author calls preservation a real condition of access. The objection is acknowledged, not dismissed.'),
 option('It establishes that conservation should take priority over every interpretive program.','Unlicensed priority','every',[10,12],'Calling conservation necessary does not establish its priority in every budget decision. The author limits what that necessity proves.'),
 option('It introduces a legitimate requirement whose importance does not settle the larger question of public purpose.','Supported relationship','does not settle',[10,12],'The author accepts the requirement in sentence 10, then limits its implications in sentence 12. The concession refines rather than abandons the argument.'),
 option('It supplies empirical evidence that interpretation causes collections to deteriorate.','Invented causal claim','causes',[9,11],'The objection concerns the need to preserve objects. Neither sentence reports that interpretation causes deterioration.')
 ]),
 question('Reasoning beyond the text','Which proposed decision is most consistent with the author’s approach?',3,[
 option('Buy the most prestigious available painting even if it adds no interpretive opportunity.','Wrong criterion','even if',[14,16],'Prestige and accumulation alone do not establish priority under the author’s criterion.'),
 option('Choose whichever program is expected to attract the largest crowd, without further inquiry.','Single-metric reduction','without further inquiry',[8,17],'The author explicitly rejects treating a visitor count as a complete account of public value.'),
 option('Redirect every conservation expense to visitor programs because only present visitors matter.','False exclusion','every',[10,11],'The argument recognizes preservation and future encounters as necessary parts of public access.'),
 option('Compare a proposed acquisition with an interpretive program by asking which would open more meaningful opportunities for the public.','Supported application','meaningful opportunities',[14,18],'This applies both the comparison of alternatives and the criterion of meaningful public participation. It does not assume acquisitions always lose that comparison.')
 ])],
 repairs:[
 repair('The author argues that museums should stop acquiring objects.','The author argues that museums should ',['stop acquiring objects.','assess acquisitions by their contribution to public understanding.','acquire only objects that attract large crowds.'],1,['This preserves the original error: a conditional defense of collecting has become a blanket rejection.','This restores the author’s criterion without ruling out justified acquisitions.','This substitutes a crowd-size rule for the richer account of access.'],[15,16]),
 repair('Preservation alone fulfills a museum’s public purpose.','Preservation ',['alone fulfills a museum’s public purpose.','is irrelevant to a museum’s public purpose.','supports access but does not by itself fulfill a museum’s public purpose.'],2,['Necessary has again become sufficient.','The author explicitly recognizes conservation’s importance.','This preserves both the concession and its limit.'],[10,12])
 ],
 scenarios:[
 scenario('A door becomes an entrance','An interpretive program can improve meaningful access even when attendance does not rise.','After a new interpretation program, the same number of visitors attend, but independent interviews show that more visitors can explain, question, and connect the works they encounter.','strengthen','This supplies an example of improved engagement without a change in visitor count, directly supporting the distinction the claim makes.',[7,8]),
 scenario('The wrong comparison','For the museum in paragraph 4, improving existing displays would create more meaningful public opportunities than the proposed acquisition.','The proposed object would complete a previously missing history for a large underserved community; the proposed display changes would provide no additional interpretive access.','weaken','The new facts favor the acquisition under the author’s own criterion. They weaken this particular comparison, while leaving the broader criterion intact.',[14,15]),
 scenario('A larger inventory','Acquisition totals alone do not determine whether a museum fulfills its public purpose.','An audit finds that the museum owns more objects than administrators had previously recorded, but says nothing about conservation, interpretation, or use.','unchanged','The inventory changes, but the finding supplies no information about the public opportunities at issue. It does not, by itself, strengthen or weaken this claim.',[17,19])
 ],
 map:[
 {id:'m-a',role:'conclusion',text:'Judge museum decisions by the public opportunities they enable.',evidence:[16,19],why:'This is the position defended across the passage.'},
 {id:'m-b',role:'evidence',text:'Physical availability can leave visitors without an interpretive point of entry.',evidence:[5,6],why:'This gives a reason why possession and open doors are not enough.'},
 {id:'m-c',role:'objection',text:'Future access depends on securing and preserving objects first.',evidence:[9],why:'This is the challenge raised by defenders of collecting.'},
 {id:'m-d',role:'response',text:'A necessary condition need not be sufficient for the public purpose.',evidence:[12],why:'This answers what the preservation objection can and cannot establish.'},
 {id:'m-e',role:'assumption',text:'Meaningful public engagement is relevant to evaluating museum decisions.',evidence:[7,18,19],why:'This evaluative bridge connects the account of engagement to the proposed decision criterion. It is an inferred commitment, not a verbatim sentence.'}
 ]
},
{
 id:'square',number:'02',category:'SOCIAL SCIENCES · CITIES & EVIDENCE',short:'The life of a square',title:'A lively square, a cautious claim.',subtitle:'What observation can tell us—and what it cannot.',accent:'#517b72',
 paragraphs:[
 [
 'A city opens a renovated public square, and before long the surrounding streets contain more cafés, more pedestrians, and more people who describe the neighborhood as a desirable place to live.',
 'Officials announce that the renovation has revived local civic life, while critics answer that the square merely decorates a transformation that would have occurred without it.',
 'Both accounts may be plausible, but their opposition should not conceal a shared temptation: each treats a preferred story about the sequence of events as though it were already an explanation.',
 'The observation that a place changed after an intervention is a useful beginning for inquiry, not an automatic settlement of what produced the change.'
 ],[
 'Perhaps the renovation encouraged people to linger and meet, gradually creating the daily familiarity that made nearby businesses viable.',
 'Perhaps rising investment had already attracted new residents and businesses, and officials renovated the square because they anticipated precisely the activity for which they later claimed credit.',
 'Or perhaps the renovation and the activity both followed a change in transport connections that made the district easier to reach, with neither being the principal cause of the other.',
 'These possibilities do not establish that design has no effect; they establish that a sequence compatible with several explanations cannot, without further evidence, uniquely identify one of them.'
 ],[
 'To distinguish the accounts, an investigator would need to ask what probably would have happened in a reasonably comparable neighborhood without the renovation.',
 'A comparison with districts that had similar trends before the project could be informative, especially if the investigator also examined changes in transport, investment, and population over the same period.',
 'Such comparisons remain imperfect because neighborhoods cannot always be made equivalent, and an apparent match on recorded features may conceal an important difference that no one thought to measure.',
 'The appropriate consequence is proportionate confidence: an explanation supported across several relevant comparisons deserves more weight than an appealing story supported only by the order in which events occurred.'
 ],[
 'Some planners worry that this caution will make action impossible, since a city rarely possesses complete knowledge before it must decide whether to build, repair, or leave a place alone.',
 'Yet deciding under uncertainty is different from pretending that the uncertainty has disappeared, and a project can be warranted by plausible benefits without supplying proof of its own causal success.',
 'A city can proceed in stages, specify in advance which changes it hopes to see, and revise its interpretation when observations fail to match those expectations.',
 'This approach treats a design decision as both a practical intervention and an occasion to learn, rather than as a claim whose public announcement guarantees its truth.'
 ],[
 'Even a well-supported increase in pedestrian traffic would leave another question open: whose use of the square has increased, and whose has become more difficult?',
 'A space occupied by more customers but fewer informal gatherings may count as a commercial success without establishing that civic participation has become broader.',
 'Thus an evaluation must make its standard of success explicit and resist substituting an easily counted activity for the more demanding public value that originally justified the project.',
 'Careful evaluation neither promises certainty nor demands paralysis; it makes the reasons for acting, and the limits of the claims made afterward, available for scrutiny.'
 ]],
 questions:[
 question('Foundations of comprehension','The author’s principal recommendation is that evaluations of public-space projects should:',0,[
 option('consider alternative explanations, calibrate confidence, and specify what counts as success.','Supported synthesis','calibrate confidence',[12,19],'Sentence 12 states the standard for causal confidence; sentence 19 adds the need to define public success. These combine the passage’s central recommendations.'),
 option('withhold every design intervention until its effects can be known with certainty.','Overstatement','every',[14,20],'The author permits decisions under uncertainty and explicitly rejects paralysis.'),
 option('treat increased pedestrian traffic as conclusive evidence of broader civic participation.','Metric substitution','conclusive',[17,18],'The passage distinguishes a measured activity from the broader civic value it may or may not serve.'),
 option('presume that design is causally irrelevant whenever several explanations are possible.','Absence of proof → disproof','irrelevant',[8,12],'Alternative explanations limit certainty; they do not establish that the renovation had no effect.')
 ]),
 question('Reasoning within the text','Why does the author introduce a possible change in transport connections?',1,[
 option('To establish the actual cause of the neighborhood’s transformation.','Possibility → fact','actual cause',[7,8],'Transport is one hypothetical account. The passage does not establish it as the actual cause.'),
 option('To illustrate a common cause that could explain both renovation and increased activity.','Supported function','both',[7,8],'The example shows how two observed changes could arise from a third factor, helping explain why the sequence alone is not decisive.'),
 option('To show that neighborhood comparisons can never provide useful evidence.','Overstatement','never',[10,12],'The author says relevant comparisons can be informative and can increase justified confidence.'),
 option('To argue that transport investment is always a better use of funds than public-space design.','Unsupported recommendation','always',[7,9],'A hypothetical causal account does not rank all possible investments. No such spending rule appears in the argument.')
 ]),
 question('Reasoning beyond the text','A city reports that square attendance doubled, but most former informal users now feel unwelcome. How would the author most likely respond?',2,[
 option('The increase conclusively demonstrates that the project achieved its civic purpose.','Metric substitution','conclusively',[17,18],'A larger count alone cannot establish a broader civic benefit when access and participation may have narrowed.'),
 option('The report proves that renovation had no causal effect on attendance.','Wrong question','no causal effect',[8,17],'The report concerns the distribution of use. It does not identify or eliminate causes of increased attendance.'),
 option('The attendance increase does not by itself establish success under a goal of broader civic participation.','Supported application','does not by itself',[18,19],'The new facts instantiate the distinction between more activity and broader participation. The judgment depends on the project’s stated goal.'),
 option('Former users’ experiences should be disregarded because they cannot be expressed as a count.','Reversal','disregarded',[17,19],'The passage asks whose use has become harder and warns against replacing public value with what is easily counted.')
 ])],
 repairs:[
 repair('Activity increased after renovation, so renovation must have caused the increase.','Activity increased after renovation, so renovation ',['must have caused the increase.','could have contributed, but alternative explanations need to be considered.','cannot have contributed to the increase.'],1,['Sequence alone does not establish causation.','This preserves a causal possibility while acknowledging what the observation cannot settle.','The lack of decisive proof has been turned into a denial of any effect.'],[4,8]),
 repair('A higher pedestrian count necessarily means broader civic participation.','A higher pedestrian count ',['necessarily means broader civic participation.','makes the experiences of former users irrelevant.','does not by itself establish broader civic participation.'],2,['This equates the indicator with the public value.','The distribution of access is part of the author’s question.','This restores the distinction between a count and the goal it is supposed to represent.'],[17,18])
 ],
 scenarios:[
 scenario('A better comparison','The renovation probably contributed to the rise in local activity.','Several districts had similar prior trends. Only the renovated district then showed a sustained increase, and investigators found no corresponding differences in transport, investment, or population changes.','strengthen','This addresses several alternatives named in the passage. It raises confidence in a contribution from the renovation, while not eliminating every possible unmeasured difference.',[10,11,12]),
 scenario('The change came first','The renovation probably contributed to the reported increase in local activity.','Detailed records show that the entire reported increase was already present before construction began, with no additional increase during or after completion.','weaken','The timing undermines the claim that the completed renovation produced this reported increase. The finding does not prove that design can never matter elsewhere.',[4,6]),
 scenario('An attractive photograph','The renovation probably contributed to the rise in local activity.','The square wins an award for the visual composition of a photograph taken on opening day.','unchanged','An aesthetic award supplies no comparison or causal evidence about the reported rise in activity. It addresses a different question.',[9,12])
 ],
 map:[
 {id:'s-a',role:'response',text:'Act in stages and revise the account as evidence develops.',evidence:[14,15],why:'This answers the concern that caution prevents action.'},
 {id:'s-b',role:'assumption',text:'Considering relevant alternatives can improve the justification of a causal claim.',evidence:[8,10,12],why:'This bridge makes investigating alternatives useful to evaluating the preferred explanation.'},
 {id:'s-c',role:'conclusion',text:'Evaluate projects with proportionate confidence and an explicit standard of success.',evidence:[12,19],why:'This combines the passage’s causal and evaluative recommendations.'},
 {id:'s-d',role:'objection',text:'Demanding caution may leave cities unable to act in time.',evidence:[13],why:'This is the concern voiced by some planners.'},
 {id:'s-e',role:'evidence',text:'Several causal accounts fit the same observed sequence.',evidence:[5,6,7,8],why:'These alternatives explain why chronology alone is insufficient.'}
 ]
},
{
 id:'translation',number:'03',category:'HUMANITIES · LANGUAGE & INTERPRETATION',short:'The faithful translation',title:'When fidelity changes its words.',subtitle:'Meaning, form, and the limits of a useful analogy.',accent:'#a16d55',
 paragraphs:[
 [
 'Readers sometimes praise a translation for remaining close to the original, as though the distance between two texts could be measured by counting the words that visibly resemble one another.',
 'The attraction of this standard is obvious: a translator who changes too freely may replace an author’s distinctive voice with a fluent performance of the translator’s own preferences.',
 'Yet visible similarity is a doubtful measure of fidelity when the same sequence of words can perform different work in different languages, or even in different settings within a single language.',
 'A literal rendering of a courteous formula, for example, may sound strangely abrupt to its new readers, preserving a verbal pattern while reversing the relationship that pattern originally established.'
 ],[
 'This difficulty invites an alternative view: a faithful translation should attend to what an expression is doing, as well as to the words with which it does it.',
 'A translator might therefore alter the wording of a greeting to preserve its degree of warmth or social distance, even though the result looks less like the original on the page.',
 'Such an alteration is not justified merely because the new version sounds pleasant; it must be answerable to an interpretation of the original expression in its setting.',
 'Otherwise the appeal to communicative purpose becomes a permission to improve, soften, or simplify an author whenever the translator finds the author inconvenient.'
 ],[
 'One might compare translation to performing a musical work on a different instrument, where an attempt to reproduce each physical gesture could fail to preserve the phrase those gestures once produced.',
 'The analogy helps explain why changing the means can sometimes preserve a relationship more faithfully than copying the means, but it cannot decide which relationships a particular translation ought to preserve.',
 'A novel’s repeated phrase may be deliberately awkward, and the discomfort it causes may matter more than the ease with which a reader moves through the scene.',
 'To eliminate that awkwardness in the name of naturalness would remove a feature of the work rather than rescue it from the accidents of a different language.'
 ],[
 'Literalists may object that an appeal to function makes fidelity impossible to assess, since translators can always claim to have preserved an invisible intention while changing anything that can be checked.',
 'The worry is legitimate, but it overlooks a distinction between a judgment that requires reasons and a judgment that is beyond criticism altogether.',
 'A translator can explain which feature a choice preserves, point to the surrounding text that makes that feature important, and acknowledge the competing feature sacrificed by the choice.',
 'Readers can then challenge the interpretation, compare the alternatives, and decide whether the claimed gain warrants the loss, even when no mechanical rule selects a single unavoidable solution.'
 ],[
 'The conclusion is not that literal versions are invariably poor or that departures from literal wording are invariably successful; either approach can be sensitive or inattentive to what a passage is doing.',
 'Fidelity is better understood as a disciplined responsibility to the relationships a text establishes, including those it establishes through deliberate difficulty, rather than as a guarantee of effortless reading.',
 'Because those relationships can compete, responsible translation sometimes involves an explicit account of a tradeoff instead of a declaration that nothing important has changed.',
 'The translator’s freedom is therefore inseparable from the obligation to make choices intelligible: a version earns trust through the reasons for its transformations, not simply through the absence of visible transformation.'
 ]],
 questions:[
 question('Foundations of comprehension','Which statement most accurately represents the author’s view of fidelity in translation?',3,[
 option('A translation is faithful whenever it is easier to read than the original.','Wrong criterion','whenever',[11,18],'Deliberate difficulty may be important to preserve. Readability alone is not the author’s standard.'),
 option('The greatest possible verbal similarity is the only defensible standard of fidelity.','Position rejected','only',[3,4],'The author illustrates how visible verbal similarity can reverse the original communicative relationship.'),
 option('Departures from literal wording are always more faithful than literal translations.','Overstatement','always',[17,18],'The author rejects a blanket ranking. Both literal and nonliteral choices require sensitivity to the text.'),
 option('Faithfulness requires reasoned choices about which textual relationships to preserve, sometimes through changed wording.','Supported synthesis','reasoned choices',[15,18],'Sentence 15 describes accountable choices; sentence 18 identifies the relationships to which those choices answer. Changed wording can be justified, but is not automatically justified.')
 ]),
 question('Reasoning within the text','The analogy with performing music on a different instrument primarily serves to:',0,[
 option('illustrate how changing a means of expression can preserve an important relationship.','Supported function','changing a means',[9,10],'The analogy clarifies a possibility: copying physical means is not always the best way to preserve what those means accomplish.'),
 option('prove that translation and musical performance follow the same rules in every respect.','Analogy overextended','every respect',[9,10],'The author limits the analogy; it does not settle which relationships deserve preservation in a specific translation.'),
 option('establish that readers always prefer smooth translations to difficult ones.','Unsupported generalization','always',[11,12],'The passage supplies no such preference finding and treats deliberate awkwardness as potentially significant.'),
 option('show that the author’s original wording has no relevance to a translator’s choices.','False exclusion','no relevance',[5,7],'Function is considered alongside wording, and alterations must answer to an interpretation of the original expression.')
 ]),
 question('Reasoning beyond the text','A translator removes a recurring, intentionally awkward phrase solely to make a novel flow more naturally. The author would most likely:',1,[
 option('approve because naturalness is sufficient to establish fidelity.','Necessary justification omitted','sufficient',[7,18],'Pleasantness or ease is not sufficient; the choice must answer to important relationships in the original.'),
 option('question the choice because it may erase a deliberate and significant feature of the work.','Supported application','deliberate',[11,12],'The new case matches the passage’s warning about removing meaningful awkwardness. The author would ask what is lost, rather than assume smoother is better.'),
 option('reject the choice because any departure from literal wording is unacceptable.','Right verdict, wrong reason','any departure',[6,17],'The author allows justified changes of wording. An objection to this choice does not imply opposition to every nonliteral choice.'),
 option('withhold all judgment because translation choices cannot be assessed rationally.','Reversal','cannot be assessed',[14,16],'The author insists that choices requiring reasons remain open to criticism and comparison.')
 ])],
 repairs:[
 repair('Changing the wording always makes a translation more faithful.','Changing the wording ',['always makes a translation more faithful.','can serve fidelity when justified by important relationships in the original.','is acceptable whenever readers prefer the result.'],1,['This makes a conditional possibility into a universal rule.','This restores both the possibility of change and the requirement to justify it.','Reader preference alone does not establish fidelity to the source.'],[6,7,17]),
 repair('Because translation requires judgment, its quality cannot be assessed.','Because translation requires judgment, its quality ',['cannot be assessed.','must be assessed only by counting matching words.','can be debated through reasons about preserved and sacrificed features.'],2,['The author expressly distinguishes judgment from immunity to criticism.','This returns to the mechanical standard the author challenges.','This preserves the author’s account of reasoned comparison despite the lack of a single mechanical rule.'],[14,15,16])
 ],
 scenarios:[
 scenario('The literal reversal','Changed wording may preserve an expression’s social function better than a literal rendering.','In a documented example, a literal version of a respectful greeting is understood as hostile, while a revised version preserves the respectful relationship established in the surrounding scene.','strengthen','The example supports the specific possibility asserted: a change in words can preserve a relationship that literal wording reverses.',[4,6]),
 scenario('A defense without evidence','This translator’s removal of an awkward phrase is justified as preserving an important relationship in the original.','The translator acknowledges that the awkwardness marked the narrator’s deliberate evasiveness and that removing it erased that effect, with no competing textual feature preserved.','weaken','The new information undermines the stated justification for this particular change. It does not establish a universal ban on changing wording.',[11,12,15]),
 scenario('A popular cover','Changed wording may preserve an expression’s social function better than a literal rendering.','The revised edition sells more copies after a publisher changes its cover, without any evidence about how readers understand its wording.','unchanged','Sales and cover design do not test the relation between wording and social function. This finding addresses popularity rather than the claim at issue.',[7,18])
 ],
 map:[
 {id:'t-a',role:'objection',text:'Appeals to function could make fidelity impossible to check.',evidence:[13],why:'This is the challenge attributed to literalists.'},
 {id:'t-b',role:'conclusion',text:'Fidelity requires accountable choices about textual relationships.',evidence:[18,20],why:'This is the position the author develops and defends.'},
 {id:'t-c',role:'response',text:'Reasons and explicit tradeoffs allow choices to be criticized.',evidence:[14,15,16],why:'This answers the worry that interpretive choices escape assessment.'},
 {id:'t-d',role:'assumption',text:'A text’s communicative relationships matter to whether it is faithfully represented.',evidence:[3,5,18],why:'This evaluative bridge makes preservation of relationships relevant to fidelity. It is an inferred commitment.'},
 {id:'t-e',role:'evidence',text:'Literal wording can reverse a greeting’s social function.',evidence:[4],why:'This concrete possibility challenges verbal similarity as a sufficient standard.'}
 ]
}
];
for(const p of passages){let n=0;p.sentences=p.paragraphs.flatMap((para,paragraph)=>para.map(text=>({id:++n,text,paragraph})));p.words=p.sentences.map(s=>s.text).join(' ').split(/\s+/).length;}
export const letters=['A','B','C','D'];
export const tabs=[{id:'answer',name:'Decide',hint:'Make a prediction'},{id:'trace',name:'Trace',hint:'Find the evidence'},{id:'repair',name:'Repair',hint:'Fix the reasoning'},{id:'test',name:'What if?',hint:'Change the evidence'},{id:'map',name:'Map',hint:'Build the argument'}];
