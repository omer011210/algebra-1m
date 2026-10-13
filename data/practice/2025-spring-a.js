/* מועד א', סמסטר אביב תשפ"ה (27.7.25) – אלגברה 1/מ, 104016 */
(function () {
  const exam = { id: '2025A', label: 'אביב תשפ״ה, מועד א׳', date: '27.7.25', course: '104016' };
  const R = String.raw;
  window.PRACTICE = window.PRACTICE || [];
  window.PRACTICE.push(
    {
      exam, q: 'שאלה 1', topic: 'lt', type: 'open',
      text: R`תהי $T:\mathbb{R}^4\to\mathbb{R}^{3\times2}$ ההעתקה
$$T(x,y,z,w)=\begin{pmatrix}x+y&z+w\\-x-y&-z-w\\x+y+z+w&0\end{pmatrix}$$
<ol class="parts">
<li>מצאו בסיס ומימד לגרעין של $T$.</li>
<li>מצאו בסיס לתמונה של $T$, כך שכל מטריצה בבסיס היא מדרגה 2.</li>
<li>יהי $U$ תת-המרחב של $\mathbb{R}^{3\times2}$ של כל המטריצות שבהן סכום כל האיברים שווה לאפס. מצאו בסיס ומימד ל-$U\cap\operatorname{Im}(T)$.</li>
<li>הגדירו העתקה לינארית $S:W\to V$ כך ש-$\operatorname{Im}(S\circ T)=\operatorname{sp}\left\{\begin{pmatrix}1&1\\1&1\end{pmatrix}\right\}$, וציינו את המרחבים $W$ ו-$V$ המתאימים.</li>
</ol>`,
      hint: R`ב' – אם אחת המטריצות בבסיס מדרגה 1, החליפו אותה בסכום שלה עם השנייה. ד' – התחום של $S$ חייב להיות הטווח של $T$.`,
      solution: R`<p><b>א.</b> $x+y=0,\ z+w=0$: $(x,-x,z,-z)$. $B_{\ker T}=\{(1,-1,0,0),(0,0,1,-1)\}$, מימד 2.</p>
<p><b>ב.</b> $\dim\operatorname{Im}T=4-2=2$. $T=(x+y)\begin{pmatrix}1&0\\-1&0\\1&0\end{pmatrix}+(z+w)\begin{pmatrix}0&1\\0&-1\\1&0\end{pmatrix}$. המטריצה הראשונה מדרגה 1, לכן נחבר לה את השנייה:
$B_{\operatorname{Im}T}=\left\{\begin{pmatrix}1&1\\-1&-1\\2&0\end{pmatrix},\begin{pmatrix}0&1\\0&-1\\1&0\end{pmatrix}\right\}$ – שתיהן מדרגה 2.</p>
<p><b>ג.</b> איבר כללי בתמונה (לפי הבסיס הראשון): $\begin{pmatrix}a&b\\-a&-b\\a+b&0\end{pmatrix}$. תנאי $U$: $a+b-a-b+a+b=0\Rightarrow b=-a$.
$U\cap\operatorname{Im}T=\operatorname{span}\left\{\begin{pmatrix}1&-1\\-1&1\\0&0\end{pmatrix}\right\}$, מימד 1.</p>
<p><b>ד.</b> $S$ מופעלת אחרי $T$, לכן $W=\mathbb{R}^{3\times2}$; התמונה מטריצות $2\times2$, לכן $V=\mathbb{R}^{2\times2}$. נגדיר $S\begin{pmatrix}a&b\\c&d\\e&f\end{pmatrix}=\begin{pmatrix}a&a\\a&a\end{pmatrix}$. אז $ST(x,y,z,w)=\begin{pmatrix}x+y&x+y\\x+y&x+y\end{pmatrix}$, ו-$\operatorname{Im}(ST)=\operatorname{sp}\left\{\begin{pmatrix}1&1\\1&1\end{pmatrix}\right\}$.</p>`
    },
    {
      exam, q: 'שאלה 2', topic: 'eigen', type: 'open',
      text: R`תהי $A=\begin{pmatrix}2&0&1&1\\1&4&-2&1\\1&0&2&1\\1&0&1&2\end{pmatrix}\in\mathbb{R}^{4\times4}$.
<ol class="parts">
<li>מצאו את הפולינום האופייני, הע"ע והריבוי האלגברי והגיאומטרי של כל ע"ע.</li>
<li>הוכיחו כי $A$ לכסינה מעל $\mathbb{R}$ ומצאו $P$ הפיכה ו-$D$ אלכסונית כך ש-$P^{-1}AP=D$.</li>
<li>תנו דוגמה למטריצה $M\in\mathbb{R}^{4\times4}$ בעלת אותו פולינום אופייני כמו של $A$, אבל <b>שלא דומה</b> ל-$A$, והסבירו מדוע.</li>
<li>נסמן $B=A-2I$. הוכיחו כי $B$ הפיכה ומצאו את $\operatorname{trace}(B^{-1})$.</li>
</ol>`,
      hint: R`א' – פתחו לפי עמודה 2 (יש בה רק איבר אחד שונה מ-0), ואז סכום שורות קבוע: $C_1\to C_1+C_2+C_3$. ד' – הע"ע של $B^{-1}$ הם ההופכיים של הע"ע של $B$.`,
      solution: R`<p><b>א.</b>
$$|\lambda I-A|=(\lambda-4)\begin{vmatrix}\lambda-2&-1&-1\\-1&\lambda-2&-1\\-1&-1&\lambda-2\end{vmatrix}\underset{C_1\to C_1+C_2+C_3}{=}(\lambda-4)\begin{vmatrix}\lambda-4&-1&-1\\\lambda-4&\lambda-2&-1\\\lambda-4&-1&\lambda-2\end{vmatrix}=(\lambda-4)^2(\lambda-1)^2$$
$\lambda_1=4$: ר"א 2, ר"ג $4-r(A-4I)=4-2=2$. $\lambda_2=1$: ר"א 2, ר"ג $4-r(A-I)=4-2=2$.</p>
<p><b>ב.</b> $\lambda=4$: $a-d=0,\ c-d=0$, בסיס $\{(1,0,1,1),(0,1,0,0)\}$. $\lambda=1$: $a+c+d=0,\ b-c=0$, בסיס $\{(-1,1,1,0),(-1,0,0,1)\}$.
$P=\begin{pmatrix}1&0&-1&-1\\0&1&1&0\\1&0&1&0\\1&0&0&1\end{pmatrix}$, $D=\operatorname{diag}(4,4,1,1)$.</p>
<p><b>ג.</b> משולשת עליונה עם האלכסון של $D$ (אותו פ"א), עם מספר שונה מ-0 מעל האלכסון כך שר"ג של 4 יהיה 1:
$M=\begin{pmatrix}4&1&0&0\\0&4&0&0\\0&0&1&0\\0&0&0&1\end{pmatrix}$, $r(M-4I)=3$ ⇒ ר"ג של 4 שווה 1 ≠ ר"א, לכן $M$ לא לכסינה ולא דומה ל-$A$.</p>
<p><b>ד.</b> הע"ע של $B=A-2I$: $2,2,-1,-1$ – 0 לא ע"ע, לכן $B$ הפיכה. הע"ע של $B^{-1}$: $\tfrac12,\tfrac12,-1,-1$, ולכן $\operatorname{trace}(B^{-1})=\tfrac12+\tfrac12-1-1=-1$.</p>`
    },
    {
      exam, q: 'שאלה 3א', topic: 'lt', type: 'tf', answer: true,
      text: R`יהי $T:V\to V$ אופרטור לינארי. הוכיחו או הפריכו: אם $T^2=T$, אז $\ker(T)\cap\operatorname{Im}(T)=\{0\}$.`,
      hint: R`קחו $v$ בחיתוך: $T(v)=0$, וקיים $u$ עם $T(u)=v$. הפעילו $T$ על $T(u)=v$.`,
      solution: R`<p><b>הטענה נכונה.</b> יהי $v\in\ker T\cap\operatorname{Im}T$. אז $T(v)=0$, וקיים $u$ כך ש-$T(u)=v$. נפעיל $T$: $T^2(u)=T(v)=0$. אבל $T^2=T$, לכן $T(u)=0$, ולכן $v=T(u)=0$.</p>`
    },
    {
      exam, q: 'שאלה 3ב', topic: 'span', type: 'tf', answer: true,
      text: R`יהי $V$ מרחב וקטורי מעל $\mathbb{R}$ ו-$\{v_1,v_2,v_3,v_4\}\subset V$ בת"ל. הוכיחו או הפריכו: אם עבור $w\in V$ הקבוצה $\{v_1-w,\ v_2-w,\ v_3-w,\ v_4-w\}$ תלויה לינארית, אז $w\in\operatorname{span}\{v_1,v_2,v_3,v_4\}$.`,
      hint: R`כתבו צירוף לא טריוויאלי שמתאפס, וסדרו מחדש: $\sum\alpha_iv_i-\beta w=0$ עם $\beta=\sum\alpha_i$. למה $\beta\neq0$?`,
      solution: R`<p><b>הטענה נכונה.</b> קיימים $\alpha_1,\dots,\alpha_4$ לא כולם 0 כך ש-$\sum\alpha_i(v_i-w)=0$, כלומר $\sum\alpha_iv_i-\beta w=0$ עם $\beta=\sum\alpha_i$. אם $\beta=0$ היינו מקבלים $\sum\alpha_iv_i=0$ עם סקלרים לא כולם 0 – בסתירה לבת"ל. לכן $\beta\neq0$ ו-$w=\sum\frac{\alpha_i}{\beta}v_i\in\operatorname{span}\{v_1,\dots,v_4\}$.</p>`
    },
    {
      exam, q: 'שאלה 3ג', topic: 'lt', type: 'tf', answer: false,
      text: R`יהיו $U,V$ מרחבים וקטוריים מעל $\mathbb{R}$ ו-$T:V\to U$ העתקה לינארית. הוכיחו או הפריכו: אם $\dim\ker(T)=2$, אז $\dim U\ge2$.`,
      hint: R`המימד של הגרעין מגביל את $\dim V$, לא את $\dim U$.`,
      solution: R`<p><b>הטענה לא נכונה.</b> מה שנכון הוא ש-$\dim V\ge2$, לא $\dim U$. למשל $T:\mathbb{R}^3\to\mathbb{R}$, $T(x,y,z)=x$: הגרעין $\operatorname{span}\{(0,1,0),(0,0,1)\}$ ממימד 2, אבל $\dim U=1$.</p>`
    },
    {
      exam, q: 'שאלה 3ד', topic: 'eigen', type: 'tf', answer: true,
      text: R`יהיו $A,B\in F^{n\times n}$ הפיכות. הוכיחו או הפריכו: אם $A$ ו-$B$ דומות, אז גם $\operatorname{adj}(A)$ ו-$\operatorname{adj}(B)$ דומות.`,
      hint: R`בפתרון הרשמי משתמשים בזהות $A\cdot\operatorname{adj}(A)=|A|I$, ולכן $A=|A|(\operatorname{adj}A)^{-1}$. למטריצות דומות אותה דטרמיננטה.`,
      solution: R`<p><b>הטענה נכונה.</b> לכל מטריצה ריבועית $A\cdot\operatorname{adj}A=|A|I$, ולכן עבור $A$ הפיכה $\operatorname{adj}A$ הפיכה ו-$A=|A|(\operatorname{adj}A)^{-1}$. $A,B$ דומות ⇒ $|A|=|B|$ וקיימת $P$ כך ש-$P^{-1}AP=B$. נציב: $P^{-1}|A|(\operatorname{adj}A)^{-1}P=|B|(\operatorname{adj}B)^{-1}$, ונצמצם (הדטרמיננטות שוות ושונות מ-0): $P^{-1}(\operatorname{adj}A)^{-1}P=(\operatorname{adj}B)^{-1}$. נחשב הופכי לשני האגפים: $P^{-1}(\operatorname{adj}A)P=\operatorname{adj}B$.</p>`
    },
    {
      exam, q: 'שאלה 4', topic: 'complex', type: 'mc', answer: 'ד',
      text: R`נתונה המשוואה ($z\in\mathbb{C}$)
$$\det\begin{pmatrix}(iz)^3&1&1&1\\(iz)^3&(iz)^4+1&2&2\\(iz)^3&1&(iz)^5+1&3\\(iz)^3&1&1&(iz)^6+1\end{pmatrix}=(\bar z)^2$$
אזי:`,
      options: [
        R`למשוואה יש בדיוק 18 פתרונות לא ממשיים השונים זה מזה, ואחד מהם הוא $\operatorname{cis}(270^\circ)$.`,
        R`למשוואה יש בדיוק 18 פתרונות לא ממשיים השונים זה מזה, ואחד מהם הוא $\operatorname{cis}(63^\circ)$.`,
        R`למשוואה יש בדיוק 20 פתרונות לא ממשיים השונים זה מזה, ואחד מהם הוא $\operatorname{cis}(126^\circ)$.`,
        R`למשוואה יש בדיוק 20 פתרונות לא ממשיים השונים זה מזה, ואחד מהם הוא $\operatorname{cis}(117^\circ)$.`,
        R`למשוואה יש בדיוק 17 פתרונות לא ממשיים השונים זה מזה, ואחד מהם הוא $\operatorname{cis}(90^\circ)$.`
      ],
      hint: R`חסרו את השורה הראשונה מהשורות 2–4 – מתקבלת משולשית עליונה. אחר כך הצגה קוטבית: $\bar z=r\operatorname{cis}(-\theta)$.`,
      solution: R`<p>אחרי חיסור השורה הראשונה משאר השורות – משולשית עליונה, והדטרמיננטה היא מכפלת האלכסון: $i^{18}z^{18}=(\bar z)^2$. $i^{18}=-1$, לכן $z^{18}=-(\bar z)^2$.
נציב $z=r\operatorname{cis}\theta$: $r^{18}\operatorname{cis}(18\theta)=r^2\operatorname{cis}(180^\circ-2\theta)$ ⇒ $r=0,1$. $r=0$ נותן פתרון ממשי. עבור $r=1$: $20\theta=180^\circ+360^\circ k$, $\theta=9^\circ+18^\circ k$, $k=0,\dots,19$ – 20 פתרונות לא ממשיים שונים ($\theta$ אינו כפולה של $180^\circ$).
$117^\circ=9^\circ+18^\circ\cdot6$ ✓ ($126^\circ$ דורש $k=6.5$).</p>
<p><b>תשובה: ד' (D).</b></p>`
    },
    {
      exam, q: 'שאלה 5', topic: 'systems', type: 'mc', answer: 'ב',
      text: R`תהי $A\in\mathbb{R}^{n\times n}$ כך ש-$|A|=4$ ותהי $B\in\mathbb{R}^{n\times m}$. אזי:`,
      options: [
        R`אם $\operatorname{rank}(B)=n$ אז למערכת $ABx=0$ יש פתרון יחיד.`,
        R`אם $\operatorname{rank}(B)=m$ אז למערכת $ABx=0$ יש פתרון יחיד.`,
        R`אם $m\neq n$ אז למערכת $ABx=0$ יש פתרון יחיד.`,
        R`אם $\operatorname{rank}(B)=m$ אז לכל $b\in\mathbb{R}^n$ למערכת $ABx=b$ יש פתרון.`,
        R`אם $\operatorname{rank}(B)=n$ אז לכל $b\in\mathbb{R}^n$ למערכת $ABx=b$ יש פתרון יחיד.`
      ],
      hint: R`$A$ הפיכה ⇒ $\operatorname{rank}(AB)=\operatorname{rank}(B)$. כמה נעלמים יש במערכת $ABx=0$?`,
      solution: R`<p>$A$ הפיכה, לכן $\operatorname{rank}(AB)=\operatorname{rank}(B)$.<br>
A. לא: $A=2I_2$, $B=\begin{pmatrix}1&0&0\\0&1&0\end{pmatrix}$ – $r(AB)=2=n$ אבל ל-$ABx=0$ אינסוף פתרונות.<br>
B. נכון: $r(AB)=m$ = מספר הנעלמים, ובהומוגנית אין סתירה ⇒ פתרון יחיד.<br>
C. לא: הדוגמה מ-A.<br>
D. לא: $A=\operatorname{diag}(1,1,4)$, $B=\begin{pmatrix}1&0\\0&1\\0&0\end{pmatrix}$, $b=(1,1,1)^t$ – אין פתרון.<br>
E. לא: הדוגמה מ-A – אינסוף פתרונות.</p>
<p><b>תשובה: ב' (B).</b></p>`
    },
    {
      exam, q: 'שאלה 6', topic: 'repr', type: 'mc', answer: 'א',
      text: R`יהי $B=\{v_1,v_2,v_3\}$ בסיס סדור של $V$ מעל $\mathbb{C}$ ו-$T:V\to V$ אופרטור. יהי $S=\{v_1+v_2,\ v_2+v_3,\ v_3\}$. אם $[T]_B=\begin{pmatrix}1&2&3\\0&1&0\\-1&0&1\end{pmatrix}$ אזי:`,
      options: [
        R`$[T]_S=\begin{pmatrix}3&5&3\\-2&-4&-3\\1&5&4\end{pmatrix}$`,
        R`$[T]_S=\begin{pmatrix}1&0&0\\1&1&0\\0&1&1\end{pmatrix}$`,
        R`$[T]_S=\begin{pmatrix}1&0&-1\\2&1&0\\3&0&1\end{pmatrix}$`,
        R`$[T]_S=\begin{pmatrix}2&-3&5\\1&-3&6\\-1&-1&2\end{pmatrix}$`,
        R`$[T]_S=\begin{pmatrix}-1&-1&3\\-2&0&3\\-2&0&1\end{pmatrix}$`
      ],
      hint: R`$[T]_S=P^{-1}[T]_BP$, כאשר עמודות $P$ הן איברי $S$ לפי $B$.`,
      solution: R`$$P_{B\to S}=\begin{pmatrix}1&0&0\\1&1&0\\0&1&1\end{pmatrix},\quad P^{-1}=\begin{pmatrix}1&0&0\\-1&1&0\\1&-1&1\end{pmatrix}$$
$$[T]_S=P^{-1}[T]_BP=\begin{pmatrix}1&0&0\\-1&1&0\\1&-1&1\end{pmatrix}\begin{pmatrix}3&5&3\\1&1&0\\-1&1&1\end{pmatrix}=\begin{pmatrix}3&5&3\\-2&-4&-3\\1&5&4\end{pmatrix}$$
<p><b>תשובה: א' (A).</b></p>`
    },
    {
      exam, q: 'שאלה 7', topic: 'eigen', type: 'mc', answer: 'ג',
      text: R`תהי $T:\mathbb{R}^3\to\mathbb{R}^3$ אופרטור לינארי המקיים $T(1,-1,3)=(2,-2,4)$, $T(2,1,4)=(3,-3,6)$. אזי:`,
      options: [R`$T$ הפיך.`, R`$\dim(\operatorname{Im}(T))=1$`, R`$(1,5,-1)$ הוא וקטור עצמי של $T$.`, R`$T$ לכסין.`, R`$\lambda=2$ הוא ערך עצמי של $T$.`],
      hint: R`שתי התמונות פרופורציונליות – מצאו צירוף של $(1,-1,3)$ ו-$(2,1,4)$ שנשלח ל-0.`,
      solution: R`<p>$T(3(1,-1,3)-2(2,1,4))=3(2,-2,4)-2(3,-3,6)=0$, כלומר $T(-1,-5,1)=0$, ולכן $(1,5,-1)$ ו"ע עם ע"ע 0.<br>
A לא: מימד התמונה קטן מ-3. B לא: $T$ מוגדר רק על שני וקטורים – אפשר להשלים כך שמימד התמונה 2. D, E לא: אפשר להשלים את הגדרת $T$ כך שלא יהיה לכסין / ש-2 לא יהיה ע"ע.</p>
<p><b>תשובה: ג' (C).</b></p>`
    }
  );
})();
