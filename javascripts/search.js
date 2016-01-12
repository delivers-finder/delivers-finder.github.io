function toggleOverlay(){var e=$("#overlay"),o=$("#overlay-container");"block"==e.css("display")?(e.hide(),o.hide()):(e.show(),o.css("top",$(window).scrollTop()),o.show())}var freshfoods=["80331","80333","80335","80336","80337","80339","80469","80538","80539","80634","80636","80637","80638","80639","80686","80687","80689","80796","80797","80798","80799","80801","80802","80803","80804","80805","80807","80809","80933","80935","80937","80939","80992","80993","80995","80997","80999","81241","81243","81245","81247","81249","81369","81371","81373","81375","81377","81379","81475","81476","81477","81479","81539","81541","81543","81545","81547","81549","81667","81669","81671","81673","81675","81677","81679","81735","81737","81739","81825","81827","81829","81925","81927","81929","82031","82061","82166","82237","82256","85579","85609","85622","85630","85640","85737","85748","85774"],bringmeister=["10115","10117","10119","10178","10179","10243","10245","10247","10249","10315","10317","10318","10319","10365","10367","10369","10405","10407","10409","10435","10437","10439","10551","10553","10555","10557","10559","10585","10587","10589","10623","10625","10627","10629","10707","10709","10711","10713","10715","10717","10719","10777","10779","10781","10783","10785","10787","10789","10823","10825","10827","10829","10961","10963","10965","10967","10969","10997","10999","12043","12045","12047","12049","12051","12053","12055","12057","12059","12099","12101","12103","12105","12107","12109","12157","12159","12161","12163","12165","12167","12169","12203","12205","12207","12209","12247","12249","12277","12279","12305","12307","12309","12347","12349","12351","12353","12355","12357","12359","12435","12437","12439","12459","12487","12489","12524","12526","12527","12529","12555","12557","12559","12587","12589","12619","12621","12623","12625","12627","12629","12679","12681","12683","12685","12687","12689","13051","13053","13055","13057","13059","13086","13088","13089","13125","13127","13129","13156","13158","13159","13187","13189","13347","13349","13351","13353","13355","13357","13359","13403","13405","13407","13409","13435","13437","13439","13465","13467","13469","13503","13505","13507","13509","13581","13583","13585","13587","13589","13591","13593","13595","13597","13599","13627","13629","14050","14052","14053","14055","14057","14059","14089","14109","14129","14163","14165","14167","14169","14193","14195","14197","14199","14467","14469","14471","14473","14476","14478","14480","14482","14513","14532","14612","15366","15566","16356","16548","16761","16341","80287","80331","80333","80335","80336","80337","80339","80469","80538","80539","80634","80636","80637","80638","80639","80686","80687","80689","80796","80797","80798","80799","80801","80802","80803","80804","80805","80807","80809","80933","80935","80937","80939","80992","80993","80995","80997","80999","81241","81243","81245","81247","81249","81369","81371","81373","81375","81377","81379","81475","81476","81477","81479","81539","81541","81543","81545","81547","81549","81667","81669","81671","81673","81675","81677","81679","81735","81737","81739","81823","81825","81827","81829","81925","81927","81929","82008","82024","82031","82041","82049","82061","82065","82110","82131","82140","82152","82166","82178","82194","82205","82223","82256","82319","82349","85221","85521","85540","85551","85577","85579","85591","85598","85609","85622","85630","85640","85716","85737","85748","85757","85764","85774","82067","82069"],rewe=["04103","04105","04107","04109","04129","04155","04157","04158","04159","04177","04178","04179","04205","04207","04209","04229","04249","04275","04277","04279","04288","04289","04299","04315","04316","04317","04318","04319","04328","04329","04347","04349","04356","04357","10115","10117","10179","10435","10437","10439","10559","13089","13125","13127","13129","13156","13158","13159","13187","13189","13355","13357","13359","13407","13409","13435","13437","13439","13465","13469","16321","16321","16341","16540","16547","16548","16552","16556","16562","16567","16567","16767","10119","10178","10623","10707","10709","10713","10715","10717","10719","10777","10779","10781","10783","10785","10787","10789","10823","10825","10827","10829","10961","10963","10965","10967","10969","10997","10999","12043","12045","12047","12049","12051","12053","12055","12057","12059","12099","12101","12103","12105","12107","12109","12157","12159","12165","12167","12169","12203","12205","12207","12209","12247","12249","12277","12279","12305","12307","12309","12347","12349","12351","12353","12355","12357","12359","12435","12437","12439","12487","12489","12524","12526","12527","12557","12559","10243","10245","10247","10249","10315","10317","10318","10319","10365","10367","10369","10405","10407","10409","12459","12555","12587","12589","12619","12621","12623","12627","12629","12679","12681","12683","12685","12687","12689","13051","13053","13055","13057","13059","13086","13088","15366","15366","15370","15370","15566","15569","10551","10553","10555","10557","10585","10587","10589","10625","10627","10629","10711","12161","12163","13347","13349","13351","13353","13403","13405","13467","13503","13505","13507","13509","13581","13583","13585","13587","13589","13591","13593","13595","13597","13599","13627","13629","14050","14052","14053","14055","14057","14059","14089","14129","14163","14165","14167","14169","14193","14195","14197","14199","14513","14532","14532","20095","20097","20099","20144","20146","20148","20149","20249","20251","20259","20354","20355","20357","20359","20457","20459","20535","22299","22765","22767","20253","22525","22527","22529","22547","22549","22559","22587","22589","22605","22607","22609","22761","22763","22769","22869","22880","25421","25436","25436","25436","25436","25436","25436","25462","25469","25482","25488","25492","25492","20255","20257","20539","21037","21039","21039","21039","21039","21073","21075","21077","21079","21107","21109","21129","21147","21149","21217","21218","21224","21521","21521","21521","21521","21521","21526","21529","21629","21635","22049","22081","22083","22085","22087","22175","22177","22179","22297","22301","22303","22305","22307","22309","22335","22337","22339","22397","22415","22417","22419","22453","22455","22457","22459","22523","22844","22846","22848","22850","22851","22889","22949","23863","23863","23863","24558","24558","25451","25474","25474","25474","20537","21029","21031","21033","21035","21465","21465","21509","22041","22043","22045","22047","22089","22111","22113","22113","22115","22117","22119","22143","22145","22145","22145","22147","22149","22159","22359","22391","22393","22395","22399","22885","22926","22927","22941","22941","22941","22941","22946","22946","22946","22946","22946","22946","22962","23552","23554","23556","23558","23560","23562","23564","23566","23568","23569","23570","23611","23611","23611","23611","23617","23619","23619","23619","23619","23619","23619","23619","23619","23626","23627","23627","23627","23628","23628","23669","23669","23669","23795","23795","23795","23795","23795","23795","23795","23795","23795","23795","23795","23795","23795","23795","23815","23815","23815","23818","23843","23843","23843","23843","23858","23858","23858","23858","23858","23860","23860","24103","24105","24106","24107","24107","24107","24109","24109","24111","24113","24113","24114","24116","24118","24119","24143","24145","24146","24147","24148","24149","24159","24161","24161","24161","24220","24220","24220","24220","24220","24222","24239","24241","24241","24241","24241","24241","24241","24242","24247","24247","24254","24259","24582","24582","24582","24582","24582","24582","24582","24582","24589","24589","24589","24589","24589","24589","24631","24646","24802","24802","24802","27711","27721","27726","27726","27749","27751","27753","27755","27777","28195","28197","28199","28201","28203","28205","28207","28209","28211","28213","28215","28217","28219","28237","28239","28259","28277","28279","28307","28309","28325","28327","28329","28355","28357","28359","28717","28719","28755","28757","28759","28777","28779","28790","28816","28832","28844","28857","28865","28876","30159","30161","30163","30165","30167","30175","30177","30179","30419","30449","30451","30453","30455","30655","30657","30659","30669","30823","30826","30827","30851","30853","30855","30900","30916","30926","30938","30989","31303","30169","30171","30173","30457","30459","30519","30521","30539","30559","30625","30627","30629","30880","30952","30966","30982","31134","31135","31137","31139","31141","31157","31171","31177","31180","31191","31199","31249","31275","31319","31224","38100","38102","38104","38106","38108","38110","38112","38114","38116","38118","38120","38122","38124","38126","38159","38162","38165","38173","38173","38173","38173","38173","38173","38176","38179","38226","38228","38229","38239","38259","38268","38300","38302","38304","38527","32049","32051","32052","32105","32107","32108","32120","32130","32139","33330","33332","33334","33335","33415","33602","33604","33605","33607","33609","33611","33613","33615","33617","33619","33647","33649","33659","33689","33699","33719","33729","33739","33758","33790","33803","33813","33818","33824","35315","35329","40210","40211","40212","40213","40215","40217","40219","40221","40223","40225","40227","40229","40231","40233","40235","40237","40239","40470","40472","40472","40476","40477","40479","40589","40591","40593","40595","40597","40599","40625","40627","40629","40699","40468","40474","40489","40545","40547","40549","40667","40668","40670","40878","40880","40882","40883","40885","41460","41462","41464","41466","41468","41469","41470","41472","41564","47877","48477","49074","49076","49078","49080","49082","49084","49086","49088","49090","49124","49134","49143","49152","49163","49170","49179","49186","49191","49205","49401","49477","49479","49492","49497","49504","49509","49525","49545","49565","50126","50127","50169","50170","50171","50226","50259","50321","50354","50374","50389","50667","50668","50670","50672","50674","50676","50677","50678","50679","50733","50735","50737","50739","50765","50767","50769","50823","50825","50827","50829","50858","50859","50931","50933","50935","50937","50939","50968","50969","50996","50997","50999","51061","51063","51065","51067","51069","51103","51105","51107","51109","51143","51145","51147","51149","51371","51373","51375","51377","51379","51427","51429","51465","51467","51467","51469","51491","51503","51515","51519","52062","52064","52066","52068","52070","52072","52074","52076","52078","52080","53111","53113","53115","53117","53119","53121","53123","53125","53127","53129","53173","53175","53177","53179","53225","53227","53229","53332","53347","53757","53840","53842","53844","53859","55116","55118","55120","55122","55124","55126","55127","55128","55129","55130","55131","55218","55246","55252","55257","55262","55263","55268","55270","55270","55270","55270","55270","55270","55270","55270","55270","55271","55276","55276","55283","55294","55299","55411","55435","65183","65185","65187","65189","65191","65193","65195","65197","65199","65201","65203","65205","65207","65232","65239","65307","65343","65344","65345","65346","65347","65366","65375","65385","65385","65388","65396","65399","60306","60308","60310","60311","60313","60314","60316","60318","60320","60322","60323","60325","60326","60327","60329","60385","60386","60388","60389","60431","60433","60435","60437","60438","60439","60486","60487","60488","60489","60528","60529","60549","60594","60596","60598","60599","61118","61138","61184","61348","61350","61352","61381","61440","61449","61462","61476","61479","63065","63067","63069","63071","63073","63075","63110","63128","63150","63150","63165","63179","63225","63263","63303","63322","63329","63450","63452","63456","63477","63500","63512","64283","64285","64287","64289","64291","64293","64295","64297","64319","64331","64342","64347","64367","64390","64409","64521","64546","64560","64569","64572","64859","65428","65439","65451","65462","65468","65474","65479","65510","65510","65510","65510","65527","65719","65760","65779","65795","65812","65817","65824","65830","65835","65843","65929","65931","65933","65934","65936","66111","66113","66115","66117","66119","66121","66123","66125","66126","66127","66128","66129","66130","66280","66287","66292","66299","66346","66359","66386","67059","67061","67063","67065","67067","67069","67071","67105","67112","67117","67122","67125","67126","67127","67133","67134","67136","67141","67149","67158","67159","67161","67165","67166","67166","67167","67169","67227","67240","67245","67246","67251","67256","67258","67259","67259","67259","67259","67346","67346","67373","67454","67459","67547","67551","68159","68161","68163","68165","68167","68169","68199","68219","68229","68239","68259","68305","68307","68309","68519","68526","68535","68542","68549","69469","69493","68723","68723","68723","68753","68766","68775","68782","68789","68794","68799","68804","68809","69115","69117","69118","69120","69121","69123","69124","69126","69168","69181","69190","69198","69207","69214","69221","69226","69231","69234","69242","69245","69251","69254","69256","74889","74909","74915","74918","74927","74939","76669","76707","76709","70173","70174","70176","70178","70180","70182","70184","70186","70188","70190","70191","70192","70193","70195","70197","70199","70327","70329","70372","70374","70376","70378","70378","70435","70437","70439","70469","70499","70734","70736","70806","70825","70839","71254","71332","71334","71336","71364","71364","71364","71384","71394","71397","71404","71409","71634","71636","71638","71640","71642","71679","71686","71691","71696","71701","71706","71706","73614","73614","73630","73650","70563","70565","70567","70569","70597","70599","70619","70629","70771","70794","71032","71034","71063","71065","71067","71069","71088","71093","71101","71106","71111","71111","71111","71111","71111","71111","71144","71144","71144","71144","71229","72622","72631","72644","72649","72669","73207","73230","73240","73249","73249","73249","73257","73728","73730","73732","73733","73734","73760","73765","73770","73773","73776","73779","76131","76133","76135","76137","76139","76149","76185","76189","76199","76227","76228","76229","76275","76287","76297","76327","76344","76351","76356","76356","76646","76689","76694","80331","80333","80335","80336","80337","80469","80538","80539","80796","80798","80799","80801","80802","80805","81479","81539","81541","81543","81545","81547","81549","81667","81669","81671","81673","81675","81677","81679","81735","81737","81739","81825","81827","81829","81925","81927","81929","82008","82024","82031","82041","82041","82041","82041","82041","82041","82041","82041","82049","82054","83607","83624","85521","85521","85540","85540","85551","85560","85567","85567","85570","85570","85570","85579","85586","85591","85598","85599","85599","85604","85609","85614","85622","85622","85630","85635","85640","85649","85652","85662","85665","85667","80339","80686","80687","80689","81241","81243","81245","81249","81369","81371","81373","81375","81377","81379","81475","81476","81477","82061","82110","82131","82131","82131","82152","82152","82166","82205","82205","82229","82319","82319","82335","82343","82349","82349","80634","80636","80637","80638","80639","80797","80803","80804","80807","80809","80933","80935","80937","80939","80992","80993","80995","80997","80999","81247","82140","82178","82194","82223","82223","82275","85221","85232","85241","85354","85356","85356","85375","85376","85376","85376","85376","85376","85386","85399","85464","85716","85737","85737","85748","85757","85764","85764","85774","82269","82272","82276","82278","82281","82285","82287","82290","82291","82293","82294","82297","85235","85235","85259","86150","86152","86153","86154","86156","86157","86159","86161","86163","86165","86167","86169","86179","86199","86316","86343","86356","86368","86391","86399","86415","86438","86444","86453","86456","86462","86492","86495","86504","86507","86507","86508","86510","86511","86517","86551","86559","86573","86577","86830","86836","86836","86836","86836","86845","86853","86856","86857","86916","86931","86937","86947","88471","88480","89073","89075","89077","89079","89081","89081","89134","89143","89143","89155","89160","89160","89171","89185","89195","89231","89233","89250","89257","89264","89269","89287","89584","89584","89604","89605","89608","89610","89614","90402","90403","90408","90409","90411","90425","90427","90475","90478","90480","90482","90489","90491","90518","90537","90542","90552","90562","90562","90571","90607","90610","91052","91054","91054","91056","91058","91074","91077","91077","91077","91077","91077","91077","91080","91080","91080","91088","91207","91217","91227","91233","91239","91241","91242","91244","91338","90419","90429","90431","90439","90441","90443","90449","90451","90453","90455","90459","90461","90469","90471","90473","90513","90522","90530","90547","90556","90556","90574","90579","90584","90587","90587","90587","90592","90596","90599","90613","90614","90617","90762","90763","90765","90766","90768","91126","91126","91126","91154","91186","91189","91448","91452","91469","91469","91560"],fooddeTwo=["10"],fooddeThree=["120","121","133","136","140"],fooddeFour=["1243","1316","1318"],foodde=["10115","10117","10119","10178","10179","10243","10245","10247","10249","10315","10317","10318","10319","10365","10367","10369","10405","10407","10409","10435","10437","10439","10551","10553","10555","10557","10559","10585","10587","10589","10623","10625","10627","10629","10707","10709","10711","10713","10715","10717","10719","10777","10779","10781","10783","10785","10787","10789","10823","10825","10827","10829","10961","10963","10965","10967","10969","10997","10999","12043","12045","12047","12049","12051","12053","12055","12057","12059","12099","12101","12103","12105","12107","12109","12157","12159","12161","12163","12165","12167","12169","12203","12205","12207","12209","12247","12249","12279","12305","12309","12347","12349","12351","12353","12355","12357","12359","12435","12437","12439","12459","12487","12489","12524","12526","12555","12557","12559","12587","12619","12621","12623","12627","12629","12679","12681","12683","12685","12687","12689","13051","13053","13055","13057","13059","13086","13088","13089","13125","13127","13156","13158","13187","13189","13347","13349","13351","13353","13355","13357","13359","13403","13405","13407","13409","13435","13437","13439","13469","13507","13509","13585","13597","13599","13627","13629","14050","14052","14053","14055","14057","14059","14089","14109","14129","14163","14165","14167","14169","14193","14195","14197","14199","14467","14469","14471","14473","14478","14480","14482","04158","04157","04129","04357","04329","04319","04316","04288","04289","04299","04318","04328","04347","04315","04317","04279","04277","04275","04103","04107","04109","04105","04155","04159","04179","04177","04229","04249","04207","04209","04205","04178","04356","04349","04416","04425","04420","04255","04451","04347","04435","04824","40210","40211","40212","40213","40215","40217","40219","40221","40223","40225","40227","40229","40231","40233","40235","40237","40239","40468","40470","40472","40474","40476","40477","40479","40489","40545","40547","40549","40589","40591","40593","40595","40597","40599","40625","40627","40629","40723","40789","40822","40724","40721","40723","40699","40764","42651","42653","42655","42657","42659","42697","42699","42719","42799","41460","41462","41464","41466","41468","41469","40472","40878","40880","40882","40883","40885","40667","42781","42103","42105","42107","42109","42115","42117","42119","42275","42277","42279","42281","42283","42285","42287","42289","42327","42329","42349","42389","50667","50668","50670","50672","50674","50676","50677","50678","50679","50733","50735","50737","50739","50765","50767","50769","50823","50825","50827","50829","50858","50859","50931","50933","50935","50937","50939","50968","50969","50996","50997","50999","51061","51063","51065","51067","51069","51103","51105","51107","51109","51143","51145","51147","51149","51371","51373","51379","50259","53111","53113","53115","53117","53119","53121","53123","53125","53127","53129","53173","53175","53177","53179","53225","53227","53229","50389","51375","50354","60308","60311","60313","60314","60316","60318","60320","60322","60323","60325","60326","60327","60329","60385","60386","60388","60389","60431","60433","60435","60437","60438","60439","60486","60487","60488","60489","60528","60529","60549","60594","60596","60598","60599","65929","65931","65933","65934","65936","65812","65843","65760","61462","61440","61348","61350","61352","65824","61476","61381","61449","65719","65795","65830","65779","65835"],emmasenkel=["10245","12103","13407","12249","10551","13589","12459","10715","14129","12629","10965","13127","13351","12167","10369","13505","12353","10625","14052","12559","10789","13055","12051","12107","10249","13435","12279","10555","13593","12489","10719","14165","12681","10969","13156","10117","13355","12203","10407","13509","12357","10629","14055","12589","10825","13059","12055","12157","10317","13439","12307","10559","13597","12526","10779","14169","12685","10999","13159","10178","13359","12207","10435","13583","12435","10709","14059","12621","10829","13088","12059","13189","12161","10319","13467","12347","10587","13627","12529","10783","14195","12689","12045","12101","10243","13405","12247","10439","13587","12439","10713","14109","12627","10963","13125","13349","12165","10367","13503","12351","10623","14050","12557","10787","14199","13053","12049","12105","10247","13409","12277","10553","13591","12487","10717","14163","12679","10967","13129","10115","13353","12169","10405","13507","12355","10627","14053","12587","10823","13057","12053","12109","10315","13437","12305","10557","13595","12524","10777","14167","12683","10997","13158","10119","13357","12205","10409","13581","12359","10707","14057","12619","10827","13086","12057","12159","10318","13465","12309","10585","13599","12527","10781","14193","12687","12043","13187","12099","10179","13403","12209","10437","13585","12437","10711","14089","12623","10961","13089","13347","12163","10365","13469","12349","10589","13629","12555","10785","14197","13051","12047","40589","40489","40211","40231","40477","40597","40468","40210","40221","40479","40595","40476","40233","40225","40549","40667","40629","40215","40229","40212","40227","40470","40599","40474","40213","40627","40239","40593","40547","40235","40223","40545","40721","40472","40219","40591","40237","40217","40625","45128","45257","45327","45143","45131","45276","45355","45145","45134","45279","45357","45149","45138","45307","45127","45239","45326","45141","45130","45259","45329","45144","45133","45277","45356","45147","45136","45289","45359","45219","45309","45139","51515","41466","50733","53125","50937","51143","40880","50670","53111","50827","53229","51065","51427","40699","41469","50737","53129","50968","51147","40883","50674","53115","50858","53332","51069","51465","40724","41472","50765","53175","50996","51371","41460","50677","53119","50931","53844","51105","51469","40789","41540","50769","53179","50999","51375","51503","41464","50679","53123","50935","51109","40878","50668","41542","50825","53227","51063","51379","51519","41468","50735","53127","50939","51145","40882","50672","53113","50829","53347","51067","51429","40723","41470","50739","53173","50969","51149","40885","50676","53117","50859","53639","51103","51467","40764","41539","50767","53177","50997","51373","41462","50678","53121","50933","53859","51107","51491","40822","50667","41541","50823","53225","51061","51377","45478","44135","45889","44289","46147","44625","47139","44803","47441","81827","45701","44227","45968","44379","47055","44789","47228","44894","45481","44139","45892","44319","46236","44628","47167","44807","47445","45881","44263","46047","44575","47058","44793","47239","45470","45659","44143","45896","44329","46240","44649","47178","44866","58452","45884","44267","46117","44579","47119","44797","47259","45473","58454","45663","44147","45899","44357","46244","44652","47198","44869","45476","44127","45888","44287","46145","44623","47138","44801","47279","58456","45699","44225","45966","44369","47053","44787","47226","44892","45479","44137","45891","44309","46149","44627","47166","44805","47443","45879","44229","46045","44388","47057","44791","47229","45468","45657","44141","45894","44328","46238","44629","47169","44809","47447","45883","44265","46049","44577","47059","44795","47249","45472","45661","44145","45897","44339","46242","44651","47179","44867","58453","45886","44269","46119","44581","47137","44799","47269","45475","58455","45665","44149","45964","44359","47051","44653","47199","44879"],real=["10115","10117","10119","10178","10179","10243","10245","10247","10249","10315","10317","10318","10319","10365","10367","10369","10405","10407","10409","10435","10437","10439","10551","10553","10555","10557","10559","10585","10587","10589","10623","10625","10627","10629","10707","10709","10711","10713","10715","10717","10719","10777","10779","10781","10783","10785","10787","10789","10823","10825","10827","10829","10961","10963","10965","10967","10969","10997","10999","12043","12045","12047","12049","12051","12053","12055","12057","12059","12099","12101","12103","12105","12107","12109","12157","12159","12161","12163","12165","12167","12169","12203","12205","12207","12209","12247","12249","12277","12279","12305","12307","12309","12347","12349","12351","12353","12355","12357","12359","12435","12437","12439","12459","12487","12489","12524","12526","12527","12529","12555","12557","12559","12587","12589","12619","12621","12623","12627","12629","12679","12681","12683","12685","12687","12689","13051","13053","13055","13057","13059","13086","13088","13089","13125","13127","13129","13156","13158","13159","13187","13189","13347","13349","13351","13353","13355","13357","13359","13403","13405","13407","13409","13435","13437","13439","13465","13467","13469","13503","13505","13507","13509","13581","13583","13585","13587","13589","13591","13593","13595","13597","13599","13627","13629","14050","14052","14053","14055","14057","14059","14089","14109","14129","14163","14165","14167","14169","14193","14195","14197","14199","30159","30161","30163","30165","30167","30169","30171","30173","30175","30177","30179","30419","30449","30451","30453","30455","30457","30459","30519","30521","30539","30559","30625","30627","30629","30655","30657","30659","30669","30851","30853","30855","30916","50667","50668","50670","50672","50674","50676","50677","50678","50679","50733","50735","50737","50739","50765","50767","50769","50823","50825","50827","50829","50858","50859","50931","50933","50935","50937","50939","50968","50969","50996","50997","50999","51061","51063","51065","51067","51069","51103","51105","51107","51109","51143","51145","51147","51149","53111","53113","53115","53117","53119","53121","53123","53125","53127","53129","53173","53175","53177","53179","53225","53227","53229","53840","53842","53844"],zipcode,shopContainer,output,outputCount,social,counter,possibleShops=[],urlParams,allyouneedModel,mytimeModel,rossmannModel,edeka24Model,lebensmittelModel,lidlModel,freshfoodsModel,emmasenkelModel,reweModel,fooddeModel,bringmeisterModel,realModel,amazonPantryMode,dmModel,collection=[],showShops=function(e){$(".single-shop").hide(),e.forEach(function(e){$("."+e.name).show()})},checkShop=function(e,o){return $.inArray(e,o)>-1?(counter++,!0):!1},checkShops=function(){var e=[];freshfoodsModel.available=checkShop(zipcode,freshfoods),bringmeisterModel.available=checkShop(zipcode,bringmeister),reweModel.available=checkShop(zipcode,rewe),emmasenkelModel.available=checkShop(zipcode,emmasenkel),realModel.available=checkShop(zipcode,real),checkShop(zipcode.slice(0,2),fooddeTwo)?fooddeModel.available=!0:checkShop(zipcode.slice(0,3),fooddeThree)?fooddeModel.available=!0:checkShop(zipcode.slice(0,4),fooddeFour)?fooddeModel.available=!0:checkShop(zipcode,foodde)?fooddeModel.available=!0:fooddeModel.available=!1;collection.forEach(function(o){o.available&&e.push(o)}),"yes"==$('input[name="fresh"]:checked').val()&&(e=filterShops(e,"fresh")),"yes"==$('input[name="frozen"]:checked').val()&&(e=filterShops(e,"frozen")),"yes"==$('input[name="shipping"]:checked').val()&&(e=filterShops(e,"shipping")),outputCount.html(e.length),output.show(),showShops(e)},filterShops=function(e,o){var a=[];return e.forEach(function(e){"fresh"==o?e.fresh||a.push(e):"frozen"==o?e.frozen||a.push(e):"shipping"==o&&(e.shipping||a.push(e))}),a.forEach(function(o){var a=e.indexOf(o);e.splice(a,1)}),e},initModels=function(){allyouneedModel={name:"allyouneed",available:!0,fresh:!0,frozen:!0,shipping:!0},dmModel={name:"dm",available:!0,fresh:!0,frozen:!0,shipping:!0},amazonPantryModel={name:"amazon-pantry",available:!0},mytimeModel={name:"mytime",available:!0,fresh:!0,frozen:!0,shipping:!0},rossmannModel={name:"rossmann",available:!0,fresh:!1,frozen:!1,shipping:!1},edeka24Model={name:"edeka24",available:!0,fresh:!1,frozen:!1,shipping:!1},lidlModel={name:"lidl",available:!0,fresh:!1,frozen:!1,shipping:!1},freshfoodsModel={name:"freshfoods",available:!0,fresh:!1,frozen:!1,shipping:!1},emmasenkelModel={name:"emmasenkel",available:!0,fresh:!1,frozen:!1,shipping:!1},reweModel={name:"rewe",available:!1,fresh:!0,frozen:!0,shipping:!0},fooddeModel={name:"foodde",available:!1,fresh:!0,frozen:!0,shipping:!1},bringmeisterModel={name:"bringmeister",available:!1,fresh:!0,frozen:!0,shipping:!0},realModel={name:"real",available:!1,fresh:!0,frozen:!1,shipping:!0},lebensmittelModel={name:"lebensmittel",available:!0,fresh:!0,frozen:!0,shipping:!1},collection=[allyouneedModel,dmModel,mytimeModel,amazonPantryModel,rossmannModel,edeka24Model,freshfoodsModel,emmasenkelModel,lebensmittelModel,lidlModel,reweModel,fooddeModel,bringmeisterModel,realModel]},getZipcode=function(){zipcode=urlParams.plz;var e=/^\d{5}$/;e.test(zipcode)||(location.href="/")},waitForInput=function(){getZipcode(),zipcode&&zipcode.length>1?($(".selected-zipcode").html(zipcode),initModels(),counter=6,shopContainer=$(".shops"),output=$(".output"),outputCount=$(".output-count"),social=$(".social"),social.show(),checkShops()):location.href="/",$("input").change(function(){checkShops()}),$(".facebook").click(function(){_gaq.push(["_trackEvent","Social Media","share on facebook",zipcode])}),$(".twitter").click(function(){_gaq.push(["_trackEvent","Social Media","share on twitter",zipcode])})},ga=function(e){_gaq.push(["_trackEvent","Search Results",e,zipcode])},voucherTracking=function(e){_gaq.push(["_trackEvent","Search Results","get voucher-booklet",e])};$(document).ready(waitForInput),(window.onpopstate=function(){var e,o=/\+/g,a=/([^&=]+)=?([^&]*)/g,l=function(e){return decodeURIComponent(e.replace(o," "))},n=window.location.search.substring(1);for(urlParams={};e=a.exec(n);)urlParams[l(e[1])]=l(e[2])})();