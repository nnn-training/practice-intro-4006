'use strict';
import dc from 'damage-calc';
//node.jsの組み込みモジュールcryptoの読み込み
import crypto from 'crypto';
const root = document.getElementById('root');
//HTMLにcryptoモジュールを利用して生成した文字列を追加で表示
root.innerHTML = 
`<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、${dc.effectiveDamage(100, 50, 30)}</p>
 <p>${crypto.randomBytes(8).toString('hex')}</p>`;
