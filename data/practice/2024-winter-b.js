/* מועד ב', סמסטר חורף תשפ"ד (28.5.24) – אלגברה 1מ1, 104064 */
(function () {
  const exam = { id: '2024WB', label: 'חורף תשפ״ד, מועד ב׳ (1מ1)', date: '28.5.24', course: '104064' };
  const R = String.raw;
  window.PRACTICE = window.PRACTICE || [];
  window.PRACTICE.push(
    {
      exam, q: 'שאלה 1', topic: 'lt', type: 'open',
      text: R`תהי $T:\mathbb{R}_2[x]\to\mathbb{R}^{2\times2}$ ההעתקה
$$T(a+bx+cx^2)=\begin{pmatrix}a-b+3c&a+b-c\\2a-2b+6c&3a+3b-3c\end{pmatrix}$$
<ol class="parts">
<li>מצאו בסיס ומימד לגרעין של $T$.</li>
<li>מצאו בסיס ומימד לתמונה של $T$.</li>
<li>מצאו בסיס לתמונה של $T$, כך ש<b>כל</b> איבר בבסיס זה הוא מטריצה הפיכה.</li>
<li>תהי $S:\mathbb{R}^{2\times2}\to\mathbb{R}_2[x]$, $S\begin{pmatrix}\alpha&\beta\\\gamma&\delta\end{pmatrix}=(\alpha-\beta)+(2\alpha-\beta+\gamma)x+(\alpha+\gamma)x^2$.
(i) מצאו נוסחה מפורשת ל-$S\circ T$. (ii) מצאו את $[S\circ T]_B$ לפי $B=\{1,\ 1+x,\ 1+x^2\}$.</li>
</ol>`,
      hint: R`ד' – הציבו את $T(p)$ לתוך $S$, ואז הפעילו על איברי $B$ וכתבו לפי $B$.`,
      solution: R`<p><b>א.</b> מדירוג: $a-b+3c=0,\ b-2c=0$ ⇒ $(a,b,c)=(-c,2c,c)$. $B_{\ker T}=\{-1+2x+x^2\}$, מימד 1.</p>
<p><b>ב.</b> $\dim\operatorname{Im}T=3-1=2$. $T=a\begin{pmatrix}1&1\\2&3\end{pmatrix}+b\begin{pmatrix}-1&1\\-2&3\end{pmatrix}+c\begin{pmatrix}3&-1\\6&-3\end{pmatrix}$;
$B_{\operatorname{Im}T}=\left\{\begin{pmatrix}1&1\\2&3\end{pmatrix},\begin{pmatrix}-1&1\\-2&3\end{pmatrix}\right\}$.</p>
<p><b>ג.</b> המטריצות מסעיף ב' הפיכות: $\det=1\neq0$ ו-$\det=-1\neq0$. אותו בסיס מתאים.</p>
<p><b>ד.</b> (i) $S(T(a+bx+cx^2))=(-2b+4c)+(3a-5b+13c)x+(3a-3b+9c)x^2$.<br>
(ii) $ST(1)=3x+3x^2=-6\cdot1+3(1+x)+3(1+x^2)$; $ST(1+x)=-2-2x=0\cdot1-2(1+x)+0(1+x^2)$; $ST(1+x^2)=4+16x+12x^2=-24\cdot1+16(1+x)+12(1+x^2)$.
$$[ST]_B=\begin{pmatrix}-6&0&-24\\3&-2&16\\3&0&12\end{pmatrix}$$</p>`
    },
    {
      exam, q: 'שאלה 2', topic: 'eigen', type: 'open',
      text: R`תהי $A=\begin{pmatrix}1&-1&2\\2&4&-4\\1&1&0\end{pmatrix}\in\mathbb{R}^{3\times3}$.
<ol class="parts">
<li>מצאו את הפולינום האופייני, הע"ע והריבוי האלגברי והגיאומטרי של כל ע"ע.</li>
<li>הוכיחו כי $A$ לכסינה מעל $\mathbb{R}$ ומצאו $P$ הפיכה ו-$D$ אלכסונית כך ש-$P^{-1}AP=D$.</li>
<li>תנו דוגמה למטריצה $M\in\mathbb{R}^{3\times3}$ בעלת אותו פולינום אופייני כמו של $A$ אבל <b>לא דומה</b> ל-$A$, או הוכיחו שלא קיימת.</li>
<li>הוכיחו או הפריכו: יהי $U$ המרחב העצמי של הע"ע <b>הקטן</b> ביותר של $A$, ויהי $W=\{(a+2b,\ -7a+b,\ -6a+3b)\mid a,b\in\mathbb{R}\}$. אזי $\mathbb{R}^3=U\oplus W$.</li>
</ol>`,
      hint: R`ד' – מצאו בסיס ל-$W$ ובדקו את $\dim(U+W)$ ע"י דירוג איחוד הבסיסים.`,
      solution: R`<p><b>א.</b>
$$|\lambda I-A|\underset{C_1-C_2}{=}\begin{vmatrix}\lambda-2&1&-2\\-\lambda+2&\lambda-4&4\\0&-1&\lambda\end{vmatrix}\underset{R_2+R_1}{=}(\lambda-2)\left[\lambda(\lambda-3)+2\right]=(\lambda-2)^2(\lambda-1)$$
$\lambda_1=2$: ר"א 2, ר"ג $3-r(A-2I)=3-1=2$. $\lambda_2=1$: ר"א 1, ר"ג 1.</p>
<p><b>ב.</b> $\lambda=2$: $a+b-2c=0$, בסיס $\{(-1,1,0),(2,0,1)\}$. $\lambda=1$: $a+c=0,\ b-2c=0$, בסיס $\{(-1,2,1)\}$.
$P=\begin{pmatrix}-1&2&-1\\1&0&2\\0&1&1\end{pmatrix}$, $D=\operatorname{diag}(2,2,1)$.</p>
<p><b>ג.</b> $M=\begin{pmatrix}2&1&0\\0&2&0\\0&0&1\end{pmatrix}$: משולשת עליונה, פ"א $(\lambda-2)^2(\lambda-1)$ כמו של $A$. אבל ר"ג של 2: $3-r(M-2I)=3-2=1\neq2$, לכן $M$ לא לכסינה ולא דומה ל-$A$.</p>
<p><b>ד. הטענה לא נכונה.</b> $U=\operatorname{sp}\{(-1,2,1)\}$. $W=\operatorname{sp}\{(1,-7,-6),(2,1,3)\}$ (מימד 2). מדירוג שלושת הוקטורים יחד:
$\begin{pmatrix}1&-7&-6\\2&1&3\\-1&2&1\end{pmatrix}\to\begin{pmatrix}1&-7&-6\\0&1&1\\0&0&0\end{pmatrix}$ ⇒ $\dim(U+W)=2\neq3$. למעשה $U\subset W$ ו-$U+W=W$.</p>`
    },
    {
      exam, q: 'שאלה 3א', topic: 'basis', type: 'tf', answer: true,
      text: R`הוכיחו או הפריכו: אם $A$ לא ריבועית, אז לפחות אחת מהמטריצות $A\cdot A^t$ או $A^t\cdot A$ לא הפיכה.`,
      hint: R`$r(AB)\le\min\{r(A),r(B)\}$ ו-$r(A)\le\min\{m,n\}$.`,
      solution: R`<p><b>הטענה נכונה.</b> $A$ מסדר $m\times n$ עם $m\neq n$; נניח $m\lt n$. אז $A^tA$ מסדר $n\times n$, ו-$r(A^tA)\le\min\{r(A^t),r(A)\}\le\min\{m,n\}\le m\lt n$ – דרגה לא מלאה ולכן לא הפיכה. באותו אופן אם $m\gt n$, $AA^t$ מסדר $m\times m$ עם דרגה $\le n\lt m$.</p>`
    },
    {
      exam, q: 'שאלה 3ב', topic: 'vs', type: 'tf', answer: false,
      text: R`יהיו $U,W\subseteq V$ תת-מרחבים כך ש-$V=U\oplus W$. הוכיחו או הפריכו: אם $v\in V$ כך ש-$v\notin U$ אז $v\in W$.`,
      hint: R`סכום ישר ≠ איחוד. נסו את הצירים ב-$\mathbb{R}^2$.`,
      solution: R`<p><b>הטענה לא נכונה.</b> $V=\mathbb{R}^2$, $U=\operatorname{sp}\{(1,0)\}$, $W=\operatorname{sp}\{(0,1)\}$. $U+W=\mathbb{R}^2$ ו-$U\cap W=\{0\}$, לכן $\mathbb{R}^2=U\oplus W$. אבל $(1,1)\notin U$ וגם $(1,1)\notin W$.</p>`
    },
    {
      exam, q: 'שאלה 3ג', topic: 'lt', type: 'tf', answer: false,
      text: R`יהי $B=\{v_1,v_2,v_3,v_4\}$ בסיס של $V$. הוכיחו או הפריכו: אם $T:V\to V$ אופרטור כך ש-$\{T(v_1),T(v_2)\}$ בסיס ל-$\operatorname{Im}T$, אז $\{v_3,v_4\}$ בסיס ל-$\ker T$.`,
      hint: R`הגדירו $T$ על הבסיס (משפט הקיום והיחידות) כך ש-$T(v_3),T(v_4)$ לא יהיו 0.`,
      solution: R`<p><b>הטענה לא נכונה.</b> נגדיר $T(v_1)=v_1,\ T(v_2)=v_2,\ T(v_3)=v_1,\ T(v_4)=v_2$ (קיים אופרטור יחיד כזה). התמונות פורשות את $\operatorname{Im}T$, ו-$\{v_1,v_2\}$ בת"ל ולכן בסיס לתמונה. אבל $T(v_3)\neq0$, ולכן $\{v_3,v_4\}$ אפילו לא בגרעין.</p>`
    },
    {
      exam, q: 'שאלה 3ד', topic: 'eigen', type: 'tf', answer: true,
      text: R`הוכיחו או הפריכו: אם ל-$A\in\mathbb{R}^{3\times3}$ יש ע"ע לא ממשי, אז $A$ לכסינה מעל $\mathbb{C}$.`,
      hint: R`פ"א ממעלה 3 עם מקדמים ממשיים: יש לו שורש ממשי, ושורשים לא ממשיים באים בזוגות צמודים.`,
      solution: R`<p><b>הטענה נכונה.</b> הפ"א ממעלה 3 עם מקדמים ממשיים, לכן יש לו שורש ממשי. יש ע"ע לא ממשי $z$, ולכן גם $\bar z$ ע"ע. סה"כ 3 ע"ע שונים למטריצה מסדר 3 ⇒ לכסינה מעל $\mathbb{C}$.</p>`
    },
    {
      exam, q: 'שאלה 4', topic: 'complex', type: 'mc', answer: 'ב',
      text: R`תהי $A=\begin{pmatrix}1&z&0\\1&z^2+z&|z|\\1&-1+z&z\end{pmatrix}\in\mathbb{C}^{3\times3}$. נסמן ב-$z_1,\dots,z_k$ את כל הפתרונות השונים מ-0 של $\det(A)=-3|z|$, ו-$t=z_1z_2\cdots z_k$. אזי:`,
      options: [R`$t$ ממשי חיובי.`, R`$t$ ממשי שלילי.`, R`$t$ מדומה טהור ($\operatorname{Re}(t)=0$).`, R`$\operatorname{Re}(t)=2\operatorname{Im}(t)$`, R`$t$ ברביע הרביעי.`],
      hint: R`חסרו את השורה הראשונה מהאחרות ופתחו. מקבלים $z^3=-4|z|$; עברו להצגה קוטבית.`,
      solution: R`<p>$\det A=\begin{vmatrix}1&z&0\\0&z^2&|z|\\0&-1&z\end{vmatrix}=z^3+|z|$. לכן $z^3=-4|z|$. עם $z=r\operatorname{cis}\theta$: $r^3\operatorname{cis}3\theta=4r\operatorname{cis}180^\circ$ ⇒ $r=2$, $\theta=60^\circ,180^\circ,300^\circ$.
$t=2^3\operatorname{cis}(60^\circ+180^\circ+300^\circ)=8\operatorname{cis}180^\circ=-8$.</p>
<p><b>תשובה: ב' (B).</b></p>`
    },
    {
      exam, q: 'שאלה 5', topic: 'inverse', type: 'mc', answer: 'א',
      text: R`יהיו $A,B\in\mathbb{R}^{5\times5}$. סמנו את הטענה הנכונה:`,
      options: [
        R`אם ל-$Ax=b$ יש פתרון לכל $b\in\mathbb{R}^5$ וקיים $c$ כך שלמערכת $Bx=c$ אין פתרון, אז ל-$(BA)x=0$ יש אינסוף פתרונות.`,
        R`אם ל-$Ax=0$ יש אינסוף פתרונות וגם ל-$Bx=0$, אז גם ל-$(A+B)x=0$ יש אינסוף פתרונות.`,
        R`אם קיים $b$ כך שלמערכת $Ax=b$ יש פתרון, אז לכל $c$ למערכת $Ax=c$ יש פתרון.`,
        R`אם ל-$Ax=0$ ול-$Bx=0$ יש אינסוף פתרונות עם 2 דרגות חופש, אז $A$ ו-$B$ שקולות שורה.`,
        R`אם ל-$(AB)x=b$ יש פתרון יחיד לכל $b$, אז גם ל-$(A+B)x=0$ יש פתרון יחיד לכל $b$.`
      ],
      hint: R`העזרו במשפט 21 התנאים השקולים להפיכות.`,
      solution: R`<p>A. נכון: $A$ הפיכה ו-$B$ לא הפיכה ⇒ $BA$ לא הפיכה ⇒ אינסוף פתרונות ל-$(BA)x=0$.<br>
B. לא: סכום לא הפיכות יכול להיות הפיך.<br>
C. לא: אם $r(A)\lt 5$, ייתכן פתרון עבור $b$ מסוים אבל לא עבור $c$ אחר.<br>
D. לא: שתיהן מדרגה 3, אבל מטריצות מאותה דרגה אינן בהכרח שקולות שורה.<br>
E. לא: $AB$ הפיכה ⇒ $A,B$ הפיכות, אבל הסכום לא בהכרח הפיך.</p>
<p><b>תשובה: א' (A).</b></p>`
    },
    {
      exam, q: 'שאלה 6', topic: 'repr', type: 'mc', answer: 'ב',
      text: R`יהי $B=\{1+x+x^2,\ 1+x,\ 1\}$ בסיס סדור של $\mathbb{R}_2[x]$ ו-$T$ אופרטור עם $[T]_B=\begin{pmatrix}1&3&1\\2&5&3\\4&9&7\end{pmatrix}$. נתון כי $8+ax\in\operatorname{Im}(T)$. אזי:`,
      options: [R`$a=0$`, R`$a=2$`, R`$a=32$`, R`$a=\tfrac{16}3$`, R`$a$ ממשי כלשהו.`],
      hint: R`$[8+ax]_B$ צריך להיות במרחב העמודות של $[T]_B$. דרגו את $([T]_B)^t$ יחד עם הוקטור.`,
      solution: R`<p>$8+ax=0(1+x+x^2)+a(1+x)+(8-a)\cdot1$, לכן $[8+ax]_B=(0,a,8-a)$. נדרג את שורות $([T]_B)^t$ יחד עם הוקטור:
$$\begin{pmatrix}1&2&4\\3&5&9\\1&3&7\\0&a&8-a\end{pmatrix}\to\begin{pmatrix}1&2&4\\0&-1&-3\\0&0&0\\0&0&8-4a\end{pmatrix}$$
הוקטור במרחב העמודות אם"ם השורה מתאפסת: $a=2$.</p>
<p><b>תשובה: ב' (B).</b></p>`
    },
    {
      exam, q: 'שאלה 7', topic: 'eigen', type: 'mc', answer: 'ד',
      text: R`תהיינה $A,B,C\in\mathbb{R}^{n\times n}$ כך ש-$C$ הפיכה ו-$AB=C-A$. אזי:`,
      options: [
        R`0 הוא לא ע"ע של $A$ וגם לא ע"ע של $B$.`,
        R`1 הוא ע"ע של $A$ אבל הוא לא ע"ע של $B$.`,
        R`1 הוא לא ע"ע של $A$ ו-0 הוא לא ע"ע של $B$.`,
        R`0 הוא לא ע"ע של $A$ ו-$(-1)$ הוא לא ע"ע של $B$.`,
        R`$(-1)$ הוא ע"ע של $A$ וגם ע"ע של $B$.`
      ],
      hint: R`העבירו אגף: $C=A(B+I)$.`,
      solution: R`<p>$C=AB+A=A(B+I)$ הפיכה, ולכן גם $A$ ו-$B+I$ הפיכות: 0 לא ע"ע של $A$, ו-$-1$ לא ע"ע של $B$.</p>
<p><b>תשובה: ד' (D).</b></p>`
    }
  );
})();
