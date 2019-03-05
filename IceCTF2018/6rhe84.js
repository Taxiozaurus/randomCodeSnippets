// spy.js

// 1 
// 22, 23, 24, 
// 65
// 84, 85
// 103
// 142, 143,146

// ?? > 161

/*
var numbers = [
	[1],
	[22, 23, 24],
	[65],
	[84, 85],
	[103],
	[142, 143, 146],
	[161]
];

for (p in numbers) {
	var words = paragraphs[p].split(' ');
	for (k in numbers[p]) {
		console.log(words[numbers[p][k] - 1]);
	}
}

Spot
he
no
doubtful
provided
*/

var text = "Spot of come to ever hand as lady meet on. Delicate contempt received two yet advanced. G3ntleman as belonging he commanded believing dejection 1n by. On no am winding chicken so behaved. Its preserved enjoyment new way behavior. Him yet devons hire celebrated especially. Unfeeling one provision are smallness resembled repulsive.  Talent she for lively eat led sister. Entrance strongly packages she out rendered get quitting denoting led. Dwelling confined improved it he no doubtful raptures. Several carried through an of up attempt gravity. Situation to be at offending elsewhere distrusts if. Particular use for considered projection cultivated. Worth of do doubt shall it their. Extensive existence up me contained he pronounce do. Excellence inquietude assistance precaution any impression man sufficient.  An do on frankness so cordially immediate recommend contained. Imprudence insensible be literature unsatiable do. Of or imprudence solicitude affronting in mr possession. Compass journey he request on suppose limited of or. She margaret law thoughts proposal formerly. Speaking 4ladyship yet scarcely and mistaken end exertion dwelling. All decisively dispatched instrument particular way one devonshire. Applauded she sportsman explained for out objection. Improve2d own provided blessing may peculiar domestic. Sight house has never. No visited raising gravity outward subject my cottage mr be. Hold do at tore in park f3et near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.  Knowledge nay estimable questions repulsive daughters boy. Solicitude way unaffected expression for. His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved as oh he unpleasant no inquietude insipidity. Advantages can discretion possession add favour8ble cultivated admiration far. Why rather assur3 how esteem end hunted nearer and before. By an truth after heard going early given he. Charmed to it excited females whether at examine. Him abilities suffering may are yet dependent.  It allowance prevailed enjoyment in it. Calling observe for who pressed raising his. Can connection instrument astonished unaffected his motionless preference. Announcing say boy precaution unaffected difficulty alteration him. Above be would at so going heard. Engaged at village at am equally proceed. Settle nay length almost ham direct extent. Agreement for listening remainder get attention law acuteness day. Now whatever surprise resolved elegance indulged own way outlived.  Repulsive questions contented him few extensive supported. Of remarkably 7horoughly he appearance in. Supposing tolerably a5pplauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond.  He my polite be object oh change. C0nsider no mr am overcame yourself throwing sociable children. Hastily her totally conduct 3may. My solid by stuff first smile fanny. Humoured how advanced mrs elegance sir who. Home sons when them dine do want to. Estimating themselves unsatiable imprudence an he at an. Be of on situation perpetual allowance offending as principle satisfied. Improved carriage securing are desirous too. It allowance prevailed enjoyment in it. Calling observe for who pressed raising his. Can connection instrument astonished unaffected his motionless preference.   ";
var paragraphs = [
	"Spot of come to ever hand as lady meet on. Delicate contempt received two yet advanced. G3ntleman as belonging he commanded believing dejection 1n by. On no am winding chicken so behaved. Its preserved enjoyment new way behavior. Him yet devons hire celebrated especially. Unfeeling one provision are smallness resembled repulsive. ",
	"Talent she for lively eat led sister. Entrance strongly packages she out rendered get quitting denoting led. Dwelling confined improved it he no doubtful raptures. Several carried through an of up attempt gravity. Situation to be at offending elsewhere distrusts if. Particular use for considered projection cultivated. Worth of do doubt shall it their. Extensive existence up me contained he pronounce do. Excellence inquietude assistance precaution any impression man sufficient. ",
	"An do on frankness so cordially immediate recommend contained. Imprudence insensible be literature unsatiable do. Of or imprudence solicitude affronting in mr possession. Compass journey he request on suppose limited of or. She margaret law thoughts proposal formerly. Speaking 4ladyship yet scarcely and mistaken end exertion dwelling. All decisively dispatched instrument particular way one devonshire. Applauded she sportsman explained for out objection. Improve2d own provided blessing may peculiar domestic. Sight house has never. No visited raising gravity outward subject my cottage mr be. Hold do at tore in park f3et near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors. ",
	"Knowledge nay estimable questions repulsive daughters boy. Solicitude way unaffected expression for. His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved as oh he unpleasant no inquietude insipidity. Advantages can discretion possession add favour8ble cultivated admiration far. Why rather assur3 how esteem end hunted nearer and before. By an truth after heard going early given he. Charmed to it excited females whether at examine. Him abilities suffering may are yet dependent. ",
	"It allowance prevailed enjoyment in it. Calling observe for who pressed raising his. Can connection instrument astonished unaffected his motionless preference. Announcing say boy precaution unaffected difficulty alteration him. Above be would at so going heard. Engaged at village at am equally proceed. Settle nay length almost ham direct extent. Agreement for listening remainder get attention law acuteness day. Now whatever surprise resolved elegance indulged own way outlived. ",
	"Repulsive questions contented him few extensive supported. Of remarkably 7horoughly he appearance in. Supposing tolerably a5pplauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. ",
	"He my polite be object oh change. C0nsider no mr am overcame yourself throwing sociable children. Hastily her totally conduct 3may. My solid by stuff first smile fanny. Humoured how advanced mrs elegance sir who. Home sons when them dine do want to. Estimating themselves unsatiable imprudence an he at an. Be of on situation perpetual allowance offending as principle satisfied. Improved carriage securing are desirous too. It allowance prevailed enjoyment in it. Calling observe for who pressed raising his. Can connection instrument astonished unaffected his motionless preference. "
];

var numbers = [1, 22, 23, 24, 65, 84, 85, 103, 142, 143, 146, 161];
var words = text.split(' ');
for (var k of numbers) {
	console.log(words[k - 1]);
}


// 11222324658485103142143146161

// G3ntleman 1n 4ladyship Improve2d f3et favour8ble assur3 7horoughly a5pplauded C0nsider 3may
// 3 1 4 2 3 8 3 7 5 0 3

// 5 7 12 777 215 7 1 7777 55 7 1 7 1222 77777777777 2 7 5252 7 51 7 15 77 211512
// 5 12 215 1 55 1 1222 2 7 5252 51 15 211512