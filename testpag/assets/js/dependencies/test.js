/*exported testPag*/
'use strict';

var testData = 'Credibly benchmark effective core competencies after e-business expertise. Professionally streamline interactive vortals vis-a-vis seamless benefits. Synergistically leverage other' +
'holistic growth strategies after ethical imperatives. Uniquely brand best-of-breed architectures' +
'without market-driven e-commerce. Efficiently restore sustainable portals vis-a-vis process-centric sources.' +
'Synergistically morph alternative human capital whereas multimedia based web services. Objectively initiate exceptional architectures before transparent action items. Monotonectally communicate seamless innovation without enabled networks. Energistically maintain virtual interfaces via' + 'high-quality niches. Efficiently expedite stand-alone sources whereas top-line e-services.' +
'Professionally restore transparent products vis-a-vis error-free deliverables. Collaboratively matrix ubiquitous innovation rather than fully researched interfaces. Quickly innovate interactive ideas after wireless e-tailers. Distinctively myocardinate fully tested manufactured products after' + 'multifunctional web services. Energistically scale effective innovation for bleeding-edge "outside the box" thinking.' +
'Holisticly architect holistic outsourcing before future-proof functionalities. Conveniently implement highly efficient customer service without principle-centered leadership skills. Seamlessly enhance granular applications rather than an expanded array of value. Professionally transform sticky' + 'methodologies for scalable customer service. Intrinsicly orchestrate cooperative benefits vis-a-vis an expanded array of applications.' +
'Conveniently promote user friendly mindshare without plug-and-play solutions. Competently fabricate diverse innovation vis-a-vis customized core competencies. Holisticly maximize error-free platforms via market positioning interfaces. Competently provide access to virtual ideas and virtual ' +'scenarios. Globally promote focused alignments and team building applications.' +
'Competently deploy scalable outsourcing without interdependent processes. Enthusiastically maximize distributed systems without leveraged convergence. Distinctively enhance inexpensive e-services vis-a-vis standards compliant meta-services. Uniquely communicate frictionless relationships after' + 'vertical ideas. Dynamically disseminate superior potentialities after granular paradigms.' +
'Seamlessly grow front-end process improvements through open-source platforms. Professionally myocardinate premier mindshare vis-a-vis viral action items. Interactively supply interactive intellectual capital after functional platforms. Proactively fabricate vertical infomediaries vis-a-vis premium' + 'quality vectors. Synergistically orchestrate parallel collaboration and idea-sharing and sticky customer service.' +
'Completely recaptiualize strategic architectures without fully tested e-services. Synergistically fashion innovative human capital rather than impactful mindshare. Appropriately network team driven testing procedures without quality solutions. Proactively morph out-of-the-box processes with' + 'superior initiatives. Interactively empower future-proof infomediaries through next-generation applications.' +
'Credibly matrix compelling e-markets via premium content. Dramatically matrix out-of-the-box internal or "organic" sources whereas intermandated opportunities. Professionally promote client-focused value for B2B testing procedures. Proactively reconceptualize bricks-and-clicks ROI rather than' + 'value-added e-services. Assertively implement progressive synergy before world-class e-markets.' +
'Quickly unleash enterprise functionalities before client-focused metrics. Interactively matrix revolutionary data before client-based methodologies. Proactively iterate high-payoff potentialities for functional infrastructures. Continually architect maintainable services via parallel processes.' + 'Appropriately formulate interactive synergy rather than out-of-the-box leadership.' +
'Dynamically restore focused opportunities before distinctive e-business. Proactively syndicate end-to-end functionalities without bleeding-edge "outside the box" thinking. Compellingly predominate interdependent niches vis-a-vis seamless mindshare. Distinctively exploit global action items with' + 'B2C quality vectors. Continually transform low-risk high-yield expertise through team driven experiences.' +
'Globally redefine backward-compatible value via end-to-end e-commerce. Seamlessly redefine worldwide imperatives whereas client-centric methodologies. Competently communicate high-quality resources and tactical resources. Assertively coordinate open-source content with multidisciplinary synergy.'+ 'Uniquely communicate integrated internal or "organic" sources without distinctive mindshare.' +
'Authoritatively grow tactical networks and user friendly infrastructures. Distinctively leverage existing progressive resources without backward-compatible core competencies. Dramatically target.';

var testPag = angular.module('testPag',['tydusol.daPaginator']).run(['$rootScope',function($rootScope){
    
    $rootScope.data = {
        testData: testData.split(' '),
        list2pagesize: '10' 
    };
    
    $rootScope.list1name = 'list1';
    $rootScope.list2name = 'list2';
}]);

