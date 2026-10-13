/* מועד א', סמסטר אביב תשפ"ד (5.9.24) – אלגברה 1/מ, 104016 */
(function () {
  const exam = { id: '2024A', label: 'אביב תשפ״ד, מועד א׳', date: '5.9.24', course: '104016' };
  const R = String.raw;
  window.PRACTICE = window.PRACTICE || [];
  window.PRACTICE.push(
    {
      exam, q: 'שאלה 1', topic: 'lt', type: 'open',
      text: R`יהי $T:\mathbb{R}^{2\times2}\to\mathbb{R}^{2\times2}$ האופרטור
$$T\begin{pmatrix}a&b\\c&d\end{pmatrix}=\begin{pmatrix}a+c-d&3a+b-d\\-3a-b+d&6a+b+3c-4d\end{pmatrix}$$
<ol class="parts">
<li>מצאו בסיס ומימד לגרעין של $T$.</li>
<li>מצאו בסיס ומימד לתמונה של $T$.</li>
<li>מצאו בסיס ומימד ל-$\operatorname{Im}(T)\cap\ker(T)$, וקבעו האם $\mathbb{R}^{2\times2}=\operatorname{Im}(T)+\ker(T)$.</li>
<li>הוכיחו שקיים אופרטור לינארי $S:\mathbb{R}^{2\times2}\to\mathbb{R}^{2\times2}$ המקיים $\operatorname{Im}(ST)=\{A\in\mathbb{R}^{2\times2}\mid A^t=-A\}$.</li>
</ol>`,
      hint: R`ג' – דרגו לקנונית את קואורדינטות בסיס התמונה כדי לקבל תנאים פשוטים, ואלצו אותם על איבר כללי של הגרעין. ד' – $S$ צריכה לשלוח את בסיס $\operatorname{Im}T$ לבסיס של המטריצות האנטי-סימטריות (משפט הקיום והיחידות).`,
      solution: R`<p><b>א.</b> מדירוג: $a+c-d=0,\ b-3c+2d=0$, כלומר $(a,b,c,d)=(-c+d,3c-2d,c,d)$.
$B_{\ker T}=\left\{\begin{pmatrix}-1&3\\1&0\end{pmatrix},\begin{pmatrix}1&-2\\0&1\end{pmatrix}\right\}$, מימד 2.</p>
<p><b>ב.</b> $\dim\operatorname{Im}T=4-2=2$. $T=a\begin{pmatrix}1&3\\-3&6\end{pmatrix}+b\begin{pmatrix}0&1\\-1&1\end{pmatrix}+c\begin{pmatrix}1&0\\0&3\end{pmatrix}+d\begin{pmatrix}-1&-1\\1&-4\end{pmatrix}$;
$B_{\operatorname{Im}T}=\left\{\begin{pmatrix}1&3\\-3&6\end{pmatrix},\begin{pmatrix}0&1\\-1&1\end{pmatrix}\right\}$.</p>
<p><b>ג.</b> דירוג קנוני: $\begin{pmatrix}1&3&-3&6\\0&1&-1&1\end{pmatrix}\to\begin{pmatrix}1&0&0&3\\0&1&-1&1\end{pmatrix}$, לכן
$\operatorname{Im}T=\left\{\begin{pmatrix}a&b\\-b&3a+b\end{pmatrix}\right\}$ (רכיב שני = מינוס השלישי, הרביעי = 3 פעמים הראשון + השני).
נאלץ על איבר כללי בגרעין: $3c-2d=-c$ ו-$d=3(-c+d)+(3c-2d)$, כלומר $d=2c$:
$\ker T\cap\operatorname{Im}T=\operatorname{span}\left\{\begin{pmatrix}1&-1\\1&2\end{pmatrix}\right\}$, מימד 1.
לפי משפט המימדים הראשון $\dim(\operatorname{Im}T+\ker T)=2+2-1=3\neq4$, ולכן $\mathbb{R}^{2\times2}\neq\operatorname{Im}T+\ker T$.</p>
<p><b>ד.</b> מרחב האנטי-סימטריות מסדר 2 הוא ממימד 1 עם בסיס $\left\{\begin{pmatrix}0&1\\-1&0\end{pmatrix}\right\}$. נשתמש בבסיס $\left\{\begin{pmatrix}1&0\\0&3\end{pmatrix},\begin{pmatrix}0&1\\-1&1\end{pmatrix}\right\}$ של התמונה, ונגדיר:
$S\begin{pmatrix}1&0\\0&3\end{pmatrix}=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $S\begin{pmatrix}0&1\\-1&1\end{pmatrix}=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $S\begin{pmatrix}0&0\\1&0\end{pmatrix}=0$, $S\begin{pmatrix}0&0\\0&1\end{pmatrix}=0$.
לפי משפט הקיום והיחידות $S$ כזו קיימת. (אפשר גם: $S\begin{pmatrix}a&b\\c&d\end{pmatrix}=\begin{pmatrix}0&a\\-a&0\end{pmatrix}$, ואז $ST\begin{pmatrix}a&b\\c&d\end{pmatrix}=\begin{pmatrix}0&a+c-d\\-a-c+d&0\end{pmatrix}$.)</p>`
    },
    {
      exam, q: 'שאלה 2', topic: 'eigen', type: 'open',
      text: R`תהי $A=\begin{pmatrix}0&-1&1\\-4&0&-2\\-6&3&-5\end{pmatrix}\in\mathbb{R}^{3\times3}$.
<ol class="parts">
<li>מצאו את הפולינום האופייני, הע"ע והריבוי האלגברי והגיאומטרי של כל ע"ע.</li>
<li>הוכיחו כי $A$ לכסינה מעל $\mathbb{R}$ ומצאו $P$ הפיכה ו-$D$ אלכסונית כך ש-$P^{-1}AP=D$.</li>
<li>תנו דוגמה למטריצה $M\neq A$ ולא אלכסונית, <b>הדומה</b> ל-$A$, והסבירו מדוע $A$ ו-$M$ דומות.</li>
<li>הוכיחו או הפריכו: יהי $U$ המרחב העצמי של הע"ע <b>הקטן ביותר</b> של $A$, ויהי $W$ תת-מרחב של $\mathbb{R}^3$ כך ש-$\mathbb{R}^3=U\oplus W$. אז $W$ הוא גם מרחב עצמי של $A$.</li>
</ol>`,
      hint: R`ג' – בנו מטריצה משולשת עליונה עם אותו אלכסון כמו $D$, ודאגו שתהיה לכסינה (ר"ג של $-2$ שווה 2). שמורות הדמיון לבדן לא מספיקות! ד' – משלים ישר אינו יחיד.`,
      solution: R`<p><b>א.</b>
$$|\lambda I-A|\underset{C_2\to C_2+C_3}{=}\begin{vmatrix}\lambda&0&-1\\4&\lambda+2&2\\6&\lambda+2&\lambda+5\end{vmatrix}\underset{R_3\to R_3-R_2}{=}(\lambda+2)\left[\lambda(\lambda+3)+2\right]=(\lambda+2)^2(\lambda+1)$$
$\lambda_1=-2$: ר"א 2, ר"ג $3-r(A+2I)=3-1=2$. $\lambda_2=-1$: ר"א 1 ולכן ר"ג 1.</p>
<p><b>ב.</b> כל הע"ע ממשיים ור"א = ר"ג ⇒ לכסינה.
$\lambda_1=-2$: $2a-b+c=0$, בסיס $\{(1,2,0),(0,1,1)\}$. $\lambda_2=-1$: $a-b+c=0,\ -3b+2c=0$, בסיס $\{(-1,2,3)\}$.
$P=\begin{pmatrix}1&0&-1\\2&1&2\\0&1&3\end{pmatrix}$, $D=\operatorname{diag}(-2,-2,-1)$.</p>
<p><b>ג.</b> נבחר $M$ משולשת עליונה עם האלכסון של $D$ (אותם ע"ע ואותם ר"א), עם מספר שונה מ-0 מעל האלכסון, כך שר"ג של $-2$ יהיה 2 ($r(M+2I)=1$). למשל
$M=\begin{pmatrix}-2&0&1\\0&-2&0\\0&0&-1\end{pmatrix}$: $r(M+2I)=1$, לכל ע"ע ר"א = ר"ג, ולכן $M$ לכסינה ודומה ל-$D$, ולכן דומה ל-$A$.
<i>הערה:</i> קיום 5 שמורות הדמיון לא מספיק לדמיון – חייבים לבדוק דמיון לאותה אלכסונית.</p>
<p><b>ד. הטענה לא נכונה.</b> $U=\{(a,2a+c,c)\}$ (המרחב העצמי של $-2$). אמנם עבור המרחב העצמי $W_1$ של $-1$ מתקיים $\mathbb{R}^3=U\oplus W_1$, אבל זה לא מחייב $W=W_1$. למשל $W=\operatorname{sp}\{(0,1,0)\}\neq W_1=\operatorname{sp}\{(-1,2,3)\}$: $(0,1,0)\notin U$, לכן $U\cap W=\{0\}$ ו-$\dim(U+W)=3$, כלומר $\mathbb{R}^3=U\oplus W$.</p>`
    },
    {
      exam, q: 'שאלה 3א', topic: 'span', type: 'tf', answer: false,
      text: R`הוכיחו או הפריכו: אם $A,B\in\mathbb{R}^{n\times n}$ הן מטריצות שקולות שורה, אז יש להן אותו מרחב עמודות.`,
      hint: R`פעולות שורה לא משנות את מרחב השורות – אבל כן משנות את מרחב העמודות.`,
      solution: R`<p><b>הטענה לא נכונה.</b> $A=\begin{pmatrix}1&1\\1&1\end{pmatrix}\xrightarrow{R_2\to R_2-R_1}B=\begin{pmatrix}1&1\\0&0\end{pmatrix}$ – שקולות שורה, אבל $\operatorname{Col}(A)=\operatorname{sp}\{(1,1)\}\neq\operatorname{Col}(B)=\operatorname{sp}\{(1,0)\}$.</p>`
    },
    {
      exam, q: 'שאלה 3ב', topic: 'inverse', type: 'tf', answer: true,
      text: R`יהיו $A,B\in\mathbb{R}^{n\times n}$. הוכיחו או הפריכו: אם $A^3+A+I=0$ וגם $A(B+2A^2)=I$, אז $B\in\operatorname{span}\{A^2,A,I\}$.`,
      hint: R`מהשוויון הראשון: $A(-A^2-I)=I$ – זו הופכית. הופכית מצד אחד במטריצה ריבועית מספיקה.`,
      solution: R`<p><b>הטענה נכונה.</b> $A^3+A+I=0\Rightarrow A(-A^2-I)=I$, ולכן $A$ הפיכה ו-$A^{-1}=-A^2-I$. מ-$A(B+2A^2)=I$, בכפל ב-$A^{-1}$ משמאל: $B+2A^2=A^{-1}=-A^2-I$, ולכן $B=-3A^2+0A-I\in\operatorname{span}\{A^2,A,I\}$.</p>`
    },
    {
      exam, q: 'שאלה 3ג', topic: 'lt', type: 'tf', answer: true,
      text: R`יהי $V$ מרחב וקטורי מעל $\mathbb{R}$, $T:V\to V$ אופרטור לינארי, ו-$\{v_1,v_2,v_3\}\subseteq V$ קבוצה בלתי תלויה לינארית. הוכיחו או הפריכו: אם $T$ על, אז $\{T(v_1),T(v_2),T(v_3)\}$ בלתי תלויה לינארית.`,
      hint: R`אופרטור: על ⇔ חח"ע. וחח"ע ⇔ $\ker T=\{0\}$.`,
      solution: R`<p><b>הטענה נכונה.</b> $T$ אופרטור ועל, לכן חח"ע ו-$\ker T=\{0\}$. אם $\alpha_1T(v_1)+\alpha_2T(v_2)+\alpha_3T(v_3)=0$ אז מלינאריות $T(\alpha_1v_1+\alpha_2v_2+\alpha_3v_3)=0$, כלומר $\alpha_1v_1+\alpha_2v_2+\alpha_3v_3\in\ker T=\{0\}$. מכיוון ש-$\{v_1,v_2,v_3\}$ בת"ל – כל הסקלרים 0.</p>
<p><i>הערה חשובה מהפתרון הרשמי:</i> מי שכותב "$\{v_1,v_2,v_3\}$ בת"ל ולכן $\alpha_1v_1+\alpha_2v_2+\alpha_3v_3=0$ גורר שהסקלרים 0, ואז מפעיל $T$..." – פסול: ברגע שהסקלרים נבחרו מראש כ-0 אין מה להוכיח.</p>`
    },
    {
      exam, q: 'שאלה 3ד', topic: 'eigen', type: 'tf', answer: true,
      text: R`יהי $B=\{v_1,v_2,v_3\}$ בסיס של $\mathbb{R}^3$. הוכיחו או הפריכו: אם $A\in\mathbb{R}^{3\times3}$ מקיימת $Av_1=Av_2=Av_3=v_3$, אז $A$ לכסינה מעל $\mathbb{R}$.`,
      hint: R`$v_3$ ו"ע עם ע"ע 1, ו-$v_1-v_2$, $v_1-v_3$ ו"ע של 0. בדקו שהשלושה בת"ל.`,
      solution: R`<p><b>הטענה נכונה.</b> $Av_3=v_3$ ⇒ $v_3$ ו"ע עם ע"ע 1. $A(v_1-v_2)=0$ ו-$A(v_1-v_3)=0$ ⇒ ו"ע של 0. בדיקת בת"ל: $\alpha(v_1-v_2)+\beta(v_1-v_3)+\gamma v_3=0$ נותן $(\alpha+\beta)v_1-\alpha v_2+(-\beta+\gamma)v_3=0$, ומכיוון ש-$B$ בסיס: $\alpha=\beta=\gamma=0$. מצאנו 3 ו"ע בת"ל למטריצה מסדר 3 – לכסינה.</p>
<p>פתרון חלופי: עבור $T(v)=Av$, $[T]_B=\begin{pmatrix}0&0&0\\0&0&0\\1&1&1\end{pmatrix}$ – משולשת תחתונה מדרגה 1; ע"ע 1 (ר"א = ר"ג = 1) ו-0 (ר"א 2, ר"ג $3-1=2$). לכן לכסינה, וגם $A$ (מייצגות את אותה העתקה).</p>`
    },
    {
      exam, q: 'שאלה 4', topic: 'complex', type: 'mc', answer: 'ד',
      text: R`יהי $t=i^{15}+i^{16}+\dots+i^{27}$ ותהי $A=\begin{pmatrix}t&1&1&1\\t&t+2&2&2\\t&1&t+1&1\\t&2&1&2\end{pmatrix}\in\mathbb{C}^{4\times4}$. נסמן $z=\det(A^{41})$. אזי:`,
      options: [R`$z=0$`, R`$z=1$`, R`$z=-1$`, R`$z=i$`, R`$z=-i$`],
      hint: R`סכום כל 4 חזקות עוקבות של $i$ הוא 0. חשבו $\det A$ ע"י חיסור השורה הראשונה מהאחרות, ואז $|A^{41}|=|A|^{41}$.`,
      solution: R`<p>$\det A=\begin{vmatrix}t&1&1&1\\0&t+1&1&1\\0&0&t&0\\0&1&0&1\end{vmatrix}=t\begin{vmatrix}t+1&1&1\\0&t&0\\1&0&1\end{vmatrix}=t^2\begin{vmatrix}t+1&1\\1&1\end{vmatrix}=t^3$, ולכן $\det(A^{41})=t^{123}$.
כל 4 חזקות עוקבות של $i$ מסתכמות ל-0, לכן $t=i^{27}=i^3=-i$, ו-
$t^{123}=(-i)^{123}=-i^{123}=-(i^4)^{30}i^3=-i^3=i$.</p>
<p><b>תשובה: ד' (D).</b></p>`
    },
    {
      exam, q: 'שאלה 5', topic: 'systems', type: 'mc', answer: 'ה',
      text: R`תהי $A\in\mathbb{R}^{3\times3}$. נתון כי $u_1=(3,0,1)^t$, $u_2=(2,1,0)^t$ הם פתרונות של המערכת האי-הומוגנית $Ax=b$, וכי $v=(0,1,0)^t$ פתרון של $Ax=0$. אזי:`,
      options: [
        R`$\operatorname{rank}(A)\gt 1$`,
        R`למערכת $Ax=c$ יש פתרון לכל $c\in\mathbb{R}^3$.`,
        R`אוסף כל הפתרונות של $Ax=b$ הוא $(3,0,1)^t+t(0,1,0)^t$.`,
        R`$(5,1,1)^t$ הוא פתרון של $Ax=b$.`,
        R`$(5,5,5)^t$ הוא פתרון של $Ax=0$.`
      ],
      hint: R`הפרש שני פתרונות של $Ax=b$ פותר את ההומוגנית. ומה קורה אם $\dim$ מרחב הפתרונות של ההומוגנית הוא 3?`,
      solution: R`<p>$u_1-u_2=(1,-1,1)^t$ פתרון של ההומוגנית ואינו תלוי ב-$v$, לכן מימד מרחב הפתרונות של ההומוגנית לפחות 2. אם הוא 3 אז $r(A)=0$, $A=0$ ואין פתרונות לאי-הומוגנית – סתירה. לכן המימד 2 והפתרון הכללי של ההומוגנית $t(1,-1,1)^t+s(0,1,0)^t$.
$(5,5,5)^t$ מתקבל עבור $t=5,\ s=10$ – פתרון של $Ax=0$. שאר הסעיפים לא נכונים (למשל $(5,1,1)^t=u_1+u_2$ ולכן $A(5,1,1)^t=2b\neq b$).</p>
<p><b>תשובה: ה' (E).</b></p>`
    },
    {
      exam, q: 'שאלה 6', topic: 'repr', type: 'mc', answer: 'ה',
      text: R`יהי $B=\{v_1,v_2,v_3\}$ בסיס סדור של מרחב וקטורי $V$ מעל $\mathbb{C}$, ו-$T:V\to V$ אופרטור. יהי $S=\{v_1,\ v_1-v_2,\ v_1+v_2-v_3\}$ בסיס נוסף, כך ש-
$[T]_S=\begin{pmatrix}1&2&0\\1&-1&3\\0&3&-3\end{pmatrix}$. בסיס לגרעין של $T$ הוא:`,
      options: [R`$\{v_1-v_2-v_3\}$`, R`$\{v_1+2v_3,\ v_2-v_3\}$`, R`$\{3v_1-2v_2,\ v_3\}$`, R`$\{2v_1-v_2-v_3\}$`, R`$\{v_3\}$`],
      hint: R`פתרו $[T]_Sx=0$ – הפתרון הוא וקטור קואורדינטות לפי $S$. תרגמו חזרה לוקטור ב-$V$.`,
      solution: R`<p>$[T]_S\to\begin{pmatrix}1&2&0\\0&1&-1\\0&0&0\end{pmatrix}$: $a+2b=0,\ b-c=0$, $(a,b,c)=b(-2,1,1)$. לכן הגרעין נפרש ע"י
$-2v_1+(v_1-v_2)+(v_1+v_2-v_3)=-v_3$, כלומר בסיס $\{v_3\}$.</p>
<p><b>תשובה: ה' (E).</b></p>`
    },
    {
      exam, q: 'שאלה 7', topic: 'eigen', type: 'mc', answer: 'ב',
      text: R`תהי $A=\begin{pmatrix}a&0&0\\2&0&2\\-4&8&0\end{pmatrix}$, ויהי $v=(3,1,-1)^t$ וקטור עצמי של $A$. אז:`,
      options: [R`$a=4$ ו-$A$ לא לכסינה`, R`$a=4$ ו-$A$ לכסינה`, R`$a=2$ ו-$A$ לכסינה`, R`$a=2$ ו-$A$ לא לכסינה`, R`$a=0$ ו-$A$ לכסינה`],
      hint: R`כתבו $Av=\lambda v$ והשוו רכיבים. אחר כך בדקו ר"ג של הע"ע הכפול.`,
      solution: R`<p>$Av=(3a,4,-4)^t=\lambda(3,1,-1)^t\Rightarrow a=\lambda=4$. אז $|\lambda I-A|=(\lambda-4)(\lambda^2-16)=(\lambda-4)^2(\lambda+4)$. ר"ג של 4: $3-r(A-4I)=3-1=2$ = ר"א. לכן לכסינה.</p>
<p><b>תשובה: ב' (B).</b></p>`
    }
  );
})();
