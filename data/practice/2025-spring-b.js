/* מועד ב', סמסטר אביב תשפ"ה (24.8.25) – אלגברה 1/מ, 104016 */
(function () {
  const exam = { id: '2025B', label: 'אביב תשפ״ה, מועד ב׳', date: '24.8.25', course: '104016' };
  const R = String.raw;
  window.PRACTICE = window.PRACTICE || [];
  window.PRACTICE.push(
    {
      exam, q: 'שאלה 1', topic: 'lt', type: 'open',
      text: R`יהי $T:\mathbb{R}^{2\times2}\to\mathbb{R}^{2\times2}$ האופרטור $T(A)=BA$, כאשר $B\in\mathbb{R}^{2\times2}$ נתונה.
<ol class="parts">
<li>הוכיחו שאם $B$ הפיכה אז $T$ אופרטור הפיך.</li>
</ol>
בסעיפים ב'–ה' נתון $B=\begin{pmatrix}1&2\\2&4\end{pmatrix}$.
<ol class="parts" start="2">
<li>מצאו בסיס ומימד לגרעין של $T$.</li>
<li>מצאו בסיס ומימד לתמונה של $T$.</li>
<li>הוכיחו או הפריכו: אם $M\in\mathbb{R}^{2\times2}$ הפיכה, אז $M\notin\operatorname{Im}(T)$ וגם $M\notin\ker(T)$.</li>
<li>יהי $S=\left\{\begin{pmatrix}1&0\\0&0\end{pmatrix},\begin{pmatrix}1&1\\0&0\end{pmatrix},\begin{pmatrix}1&1\\1&0\end{pmatrix},\begin{pmatrix}1&1\\1&1\end{pmatrix}\right\}$. מצאו את $[T^2]_S$.</li>
</ol>`,
      hint: R`א' – אופרטור: מספיק חח"ע. ד' – חשבו דטרמיננטה של איבר כללי בגרעין ובתמונה. ה' – $T^2(A)=B^2A$; הפעילו על כל איבר של $S$ וכתבו לפי $S$.`,
      solution: R`<p><b>א.</b> אם $A\in\ker T$ אז $BA=0$; נכפול ב-$B^{-1}$ משמאל: $A=0$. לכן $\ker T=\{0\}$, $T$ חח"ע, ואופרטור – לכן גם על והפיך.</p>
<p><b>ב.</b> $T\begin{pmatrix}a&b\\c&d\end{pmatrix}=\begin{pmatrix}a+2c&b+2d\\2a+4c&2b+4d\end{pmatrix}$. גרעין: $a+2c=0,\ b+2d=0$:
$B_{\ker T}=\left\{\begin{pmatrix}-2&0\\1&0\end{pmatrix},\begin{pmatrix}0&-2\\0&1\end{pmatrix}\right\}$, מימד 2.</p>
<p><b>ג.</b> $\dim\operatorname{Im}T=2$; $T=(a+2c)\begin{pmatrix}1&0\\2&0\end{pmatrix}+(b+2d)\begin{pmatrix}0&1\\0&2\end{pmatrix}$:
$B_{\operatorname{Im}T}=\left\{\begin{pmatrix}1&0\\2&0\end{pmatrix},\begin{pmatrix}0&1\\0&2\end{pmatrix}\right\}$.</p>
<p><b>ד. הטענה נכונה.</b> כל מטריצה בגרעין מהצורה $\begin{pmatrix}-2c&-2d\\c&d\end{pmatrix}$ עם דטרמיננטה $-2cd+2cd=0$; כל מטריצה בתמונה מהצורה $\begin{pmatrix}a&b\\2a&2b\end{pmatrix}$ עם דטרמיננטה $0$. לכן מטריצה הפיכה אינה באף אחד מהם.</p>
<p><b>ה.</b> $T^2(A)=B^2A=\begin{pmatrix}5&10\\10&20\end{pmatrix}A=\begin{pmatrix}5a+10c&5b+10d\\10a+20c&10b+20d\end{pmatrix}$.
$T^2(S_1)=\begin{pmatrix}5&0\\10&0\end{pmatrix}=5S_1-10S_2+10S_3+0S_4$,
$T^2(S_2)=\begin{pmatrix}5&5\\10&10\end{pmatrix}=0S_1-5S_2+0S_3+10S_4$,
$T^2(S_3)=\begin{pmatrix}15&5\\30&10\end{pmatrix}=10S_1-25S_2+20S_3+10S_4$,
$T^2(S_4)=\begin{pmatrix}15&15\\30&30\end{pmatrix}=0S_1-15S_2+0S_3+30S_4$.
$$[T^2]_S=\begin{pmatrix}5&0&10&0\\-10&-5&-25&-15\\10&0&20&0\\0&10&10&30\end{pmatrix}$$</p>`
    },
    {
      exam, q: 'שאלה 2', topic: 'eigen', type: 'open',
      text: R`תהי $A=\begin{pmatrix}1&1&0&0\\3&3&0&0\\0&0&1&1\\0&0&3&3\end{pmatrix}\in\mathbb{R}^{4\times4}$.
<ol class="parts">
<li>מצאו את הפולינום האופייני, הע"ע והריבוי האלגברי והגיאומטרי של כל ע"ע.</li>
<li>הוכיחו כי $A$ לכסינה מעל $\mathbb{R}$ ומצאו $P$ הפיכה ו-$D$ אלכסונית כך ש-$P^{-1}AP=D$.</li>
<li>יהי $T:\mathbb{R}^4\to\mathbb{R}^4$, $T(v)=Av$. הוכיחו כי קיים בסיס $S$ של $\mathbb{R}^4$ כך ש-$[T]_S=\begin{pmatrix}2&0&2&0\\0&2&0&2\\2&0&2&0\\0&2&0&2\end{pmatrix}$.</li>
<li>נסמן $B=(A-2I)^{10}$. הוכיחו כי $B$ סקלרית.</li>
</ol>`,
      hint: R`ג' – מטריצות המייצגות את אותו אופרטור בבסיסים שונים הן דומות. הראו שהמטריצה הנתונה דומה לאותה $D$. ד' – מטריצה לכסינה עם ע"ע יחיד היא סקלרית.`,
      solution: R`<p><b>א.</b> בגלל הסימטריה בין שורות 1,2 ו-3,4 (פעולות $C_1\to C_1-C_2$, $C_3\to C_3-C_4$, $R_2\to R_2+R_1$, $R_4\to R_4+R_3$): $|\lambda I-A|=\lambda^2(\lambda-4)^2$.
$\lambda_1=4$: ר"א 2, ר"ג $4-r(A-4I)=2$. $\lambda_2=0$: ר"א 2, ר"ג $4-r(A)=2$.
(אפשר גם לפי משפטים: דרגה 2 ⇒ 0 ע"ע מר"ג 2; סכום כל עמודה 4 ⇒ 4 ע"ע; הע"ע האחרון לפי העקבה הוא 4.)</p>
<p><b>ב.</b> $\lambda=4$: $3a-b=0,\ 3c-d=0$, בסיס $\{(1,3,0,0),(0,0,1,3)\}$. $\lambda=0$: $a+b=0,\ c+d=0$, בסיס $\{(1,-1,0,0),(0,0,1,-1)\}$.
$P=\begin{pmatrix}1&0&1&0\\3&0&-1&0\\0&1&0&1\\0&3&0&-1\end{pmatrix}$, $D=\operatorname{diag}(4,4,0,0)$.</p>
<p><b>ג.</b> $[T]_E=A$. בסיס $S$ כזה קיים אם"ם המטריצה הנתונה $M$ דומה ל-$A$. $M$: דרגה 2 ⇒ 0 ע"ע מר"ג 2 (ור"א לפחות 2); סכום כל שורה 4 ⇒ 4 ע"ע; לפי העקבה הע"ע החסר 4. ר"ג של 4: $4-r(M-4I)=4-2=2$. לכל ע"ע ר"א = ר"ג, לכן $M$ לכסינה ודומה לאותה $D$, ולכן ל-$A$.</p>
<p><b>ד.</b> הע"ע של $A-2I$: $2,2,-2,-2$, ולכן של $B=(A-2I)^{10}$: $2^{10}$ (ארבע פעמים). $A$ לכסינה ⇒ כל פולינום ב-$A$ לכסין ⇒ $B$ לכסינה עם ע"ע יחיד ⇒ סקלרית. (חישוב ישיר: $(A-2I)^2=4I$, ולכן $B=(4I)^5=4^5I$.)</p>`
    },
    {
      exam, q: 'שאלה 3א', topic: 'systems', type: 'tf', answer: false,
      text: R`תהי $A\in\mathbb{R}^{m\times n}$. הוכיחו או הפריכו: אם $\operatorname{rank}(A)=n$, אז לכל $c\in\mathbb{R}^m$ למערכת $Ax=c$ יש פתרון.`,
      hint: R`נסו $m\gt n$, למשל מטריצה $3\times2$ מדרגה 2.`,
      solution: R`<p><b>הטענה לא נכונה.</b> $A=\begin{pmatrix}1&0\\0&1\\0&0\end{pmatrix}$ מסדר $3\times2$ ודרגה 2, אבל עבור $c=(0,0,1)^t$ אין פתרון: $r(A|c)=3\gt r(A)=2$.</p>`
    },
    {
      exam, q: 'שאלה 3ב', topic: 'span', type: 'tf', answer: true,
      text: R`יהי $\{v_1,\dots,v_n\}\subset V$ בת"ל, $n\ge2$. הוכיחו או הפריכו: $\operatorname{span}\{v_1,\dots,v_{n-1}\}\neq\operatorname{span}\{v_2,\dots,v_n\}$.`,
      hint: R`הניחו בשלילה שוויון. אז $v_1$ שייך לפרוש של $v_2,\dots,v_n$.`,
      solution: R`<p><b>הטענה נכונה.</b> נניח בשלילה שוויון. מרחב נפרש מכיל את הקבוצה הפורשת, לכן $v_1\in\operatorname{span}\{v_2,\dots,v_n\}$ – $v_1$ צירוף לינארי של $v_2,\dots,v_n$, ולכן $\{v_1,\dots,v_n\}$ ת"ל – סתירה.</p>`
    },
    {
      exam, q: 'שאלה 3ג', topic: 'det', type: 'tf', answer: true,
      text: R`תהי $A\in\mathbb{R}^{3\times3}$. הוכיחו או הפריכו: אם $|A|=1$ אז $\operatorname{adj}(\operatorname{adj}A)=A$.`,
      hint: R`בפתרון הרשמי: $A\cdot\operatorname{adj}(A)=|A|I$ ו-$|\operatorname{adj}A|=|A|^{n-1}$.`,
      solution: R`<p><b>הטענה נכונה.</b> $A\cdot\operatorname{adj}(A)=|A|I=I$, לכן $A$ הפיכה ו-$\operatorname{adj}(A)=A^{-1}$. בנוסף $|\operatorname{adj}A|=|A|^{n-1}=1$. נשתמש בזהות עבור $\operatorname{adj}A$: $\operatorname{adj}A\cdot\operatorname{adj}(\operatorname{adj}A)=|\operatorname{adj}A|I=I$, כלומר $A^{-1}\cdot\operatorname{adj}(\operatorname{adj}A)=I$. נכפול ב-$A$ משמאל: $\operatorname{adj}(\operatorname{adj}A)=A$.</p>`
    },
    {
      exam, q: 'שאלה 3ד', topic: 'eigen', type: 'tf', answer: false,
      text: R`הוכיחו או הפריכו: אם $A,B\in F^{n\times n}$ מטריצות דומות, אז $A$ ו-$B$ שקולות שורה.`,
      hint: R`נסו שתי מטריצות $2\times2$ מדרגה 1 שדומות זו לזו אבל קנוניות שונות.`,
      solution: R`<p><b>הטענה לא נכונה.</b> $A=\begin{pmatrix}1&1\\0&0\end{pmatrix}$, $B=\begin{pmatrix}1&0\\0&0\end{pmatrix}$: $A$ משולשת עליונה עם ע"ע 1 ו-0 – שני ע"ע שונים, לכסינה ודומה ל-$B$. אבל שתיהן קנוניות ושונות, ולכן אינן שקולות שורה (למשל $(1,1)\notin\operatorname{Row}(B)$).</p>`
    },
    {
      exam, q: 'שאלה 4', topic: 'poly', type: 'mc', answer: 'ד',
      text: R`יהי $f(x)=x^6+ax^4+bx^3$ פולינום עם מקדמים ממשיים, $a,b\neq0$. אזי:`,
      options: [
        R`ל-$f(x)$ אין שורשים ממשיים פרט ל-0.`,
        R`ל-$f(x)$ יש שורש ממשי חיובי.`,
        R`אם $2+5i$ הוא שורש של $f(x)$ אז גם 4 הוא שורש של $f(x)$.`,
        R`אם $z$ הוא שורש לא ממשי של $f(x)$ אז $z$ הוא לא שורש של הנגזרת $f'(x)$.`,
        R`ל-$f(x)$ אין שורש ממשי שלילי מריבוי 2.`
      ],
      hint: R`$f(x)=x^3(x^3+ax+b)$. השתמשו במשפט השורשים הצמודים, בווייטה לסכום השורשים, ובקשר ריבוי–נגזרת.`,
      solution: R`<p>$f(x)=x^3(x^3+ax+b)$ – ל-0 ריבוי 3, ועוד 3 שורשים שונים מ-0 (כי $b\neq0$).<br>
A. לא: $x^3+ax+b$ ממעלה אי-זוגית עם מקדמים ממשיים – יש לו שורש ממשי, ושונה מ-0.<br>
B, E. לא: אי אפשר לדעת את סימן השורש הממשי בלי מידע על $b$.<br>
C. לא: אם $2+5i$ שורש אז גם $2-5i$; לפי וייטה (מקדם $x^2$ הוא 0): $2+5i+2-5i+z=0$, כלומר השורש השלישי $-4$ ולא 4.<br>
D. נכון: אם $z$ לא ממשי שורש גם של $f'$, הריבוי שלו לפחות 2, וכך גם של $\bar z$ – 4 שורשים לפחות ל-$x^3+ax+b$, וזה סותר את המשפט היסודי של האלגברה (מעלה 3).</p>
<p><b>תשובה: ד' (D).</b></p>`
    },
    {
      exam, q: 'שאלה 5', topic: 'basis', type: 'mc', answer: 'ד',
      text: R`יהי $W$ מרחב הפתרונות מעל $\mathbb{R}$ של המערכת ההומוגנית
$x_1-x_2+x_3+x_4-x_5=0,\ x_1+x_2-x_3-x_4-x_5=0$, ויהי
$U=\operatorname{span}\{(-1,-1,0,0,0),(1,3,2,2,2),(0,1,1,1,1)\}$. אז:`,
      options: [
        R`$\dim W=2$`,
        R`$\dim U=3$`,
        R`$\mathbb{R}^5=W\oplus U$`,
        R`אם $V=\{(a_1,\dots,a_5)\mid a_1=a_3=a_4\}$ אז $\dim V\cap W=1$.`,
        R`אם $V=\{(a_1,\dots,a_5)\mid a_1=a_4=a_5\}$ אז $\dim V\cap W=1$.`
      ],
      hint: R`$\dim W=n-r$. בדקו את $\dim U$ בדירוג. לחיתוך – קחו איבר כללי של $W$ ואלצו עליו את תנאי $V$.`,
      solution: R`<p>A. לא: 2 משוואות בת"ל ו-5 נעלמים ⇒ $\dim W=3$.<br>
B. לא: מדירוג $\dim U=2$, בסיס $\{(1,0,-1,-1,-1),(0,1,1,1,1)\}$.<br>
C. לא: איבר כללי ב-$U$: $(a,b,-a+b,-a+b,-a+b)$; כפייה של משוואות $W$ נותנת $b=2a$, ולכן $W\cap U=\operatorname{sp}\{(1,2,1,1,1)\}\neq\{0\}$.<br>
D. נכון: איבר כללי ב-$W$: $(x_5,\ x_3+x_4,\ x_3,\ x_4,\ x_5)$. תנאי $V$: $x_5=x_3=x_4$ ⇒ $(x_5,2x_5,x_5,x_5,x_5)$ ⇒ מימד 1.<br>
E. לא: $x_5=x_4$ ⇒ $(x_5,x_3+x_5,x_3,x_5,x_5)$ ⇒ מימד 2.</p>
<p><b>תשובה: ד' (D).</b></p>`
    },
    {
      exam, q: 'שאלה 6', topic: 'eigen', type: 'mc', answer: 'ה',
      text: R`יהי $T:\mathbb{R}^3\to\mathbb{R}^3$ אופרטור. אם $(3,1,4)^t$ ו"ע של $T$ עם ע"ע $\lambda_1=3$ ו-$(-2,0,5)^t$ ו"ע עם ע"ע $\lambda_2=-2$, אז $T(4,2,13)^t$ שווה ל:`,
      options: [R`$(1,1,9)^t$`, R`$(7,3,17)^t$`, R`$(26,6,24)^t$`, R`$(13,3,2)^t$`, R`$(22,6,14)^t$`],
      hint: R`כתבו $(4,2,13)$ כצירוף של שני הו"ע.`,
      solution: R`<p>$(4,2,13)=2(3,1,4)+(-2,0,5)$, לכן
$T(4,2,13)=2\cdot3(3,1,4)+(-2)(-2,0,5)=(18,6,24)+(4,0,-10)=(22,6,14)$.</p>
<p><b>תשובה: ה' (E).</b></p>`
    },
    {
      exam, q: 'שאלה 7', topic: 'eigen', type: 'mc', answer: 'ג',
      text: R`נתון כי $A=\begin{pmatrix}a&-1&2\\b&4&-4\\1&c&0\end{pmatrix}$ דומה ל-$B=\begin{pmatrix}2&2&-4\\0&3&-2\\0&1&0\end{pmatrix}$. אזי $a+b+c$ שווה ל:`,
      options: ['2', '3', '4', '1', '0'],
      hint: R`עקבה שווה נותנת את $a$. ל-$B$ הע"ע 2 עם ר"ג 2 – לכן גם ל-$A$: $r(A-2I)=1$.`,
      solution: R`<p>לדומות אותה עקבה ⇒ $a=1$. 2 ע"ע של $B$ (ו"ע $(1,0,0)^t$), ור"ג: $3-r(B-2I)=3-r\begin{pmatrix}0&2&-4\\0&1&-2\\0&1&-2\end{pmatrix}=2$. לדומות אותם ע"ע עם אותם ריבויים, לכן $r(A-2I)=1$:
$A-2I=\begin{pmatrix}-1&-1&2\\b&2&-4\\1&c&-2\end{pmatrix}$ – שורות 2,3 כפולות של הראשונה ⇒ $b=2,\ c=1$. $a+b+c=4$.</p>
<p><b>תשובה: ג' (C).</b></p>`
    }
  );
})();
