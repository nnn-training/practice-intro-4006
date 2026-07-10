'use strict'

import dc from 'damage-calc';
import crypto from 'crypto';
const root = document.getElementById('root');
root.innerHTML =
`<p>  攻撃力100、防御50、 防御貫通30のダメージは、
${dc.effectiveDamage(100,50,30)}
 </p>`
root.innerHTML += '<p>' + crypto.randomBytes(8).toString('hex') + '</p>';