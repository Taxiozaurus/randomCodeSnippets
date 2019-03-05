var salt = [0,7,2,7,1,9,7,8];
console.log(decode("IjgJUO{P_LOUV_AIRUS_GYQUTOLTD_SKRFB_TWNKCFT}", salt));

function decode(string, key) {
	var i = 0, c, nc, a = [], s = !1;
	for (var k = 0; k < string.length; k++) {
		s = !1;
		if (string[k].match(/[\{\}_]/)) {
			nc = string[k];
			s = !0;
		} else {
			nc = String.fromCharCode(
				string[k].charCodeAt(0) -
				key[i]
			);
		}
		a.push(nc);
		
		if (!s) {
			i++;
		}
		if (key.length <= i) {
			i = 0;
		}
	}
	return a.join('');
}
// IceCTF{I_DONT_THINK_GRONSFELD_LIKES_MONDAYS}