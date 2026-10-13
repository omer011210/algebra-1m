/* דוגמאות פתורות – רק דוגמאות שמופיעות בחומר המצורף (סיכום מוקלד / בכתב יד / מחברת הרצאות).
   src: S = סיכום מוקלד, H = סיכום בכתב יד, N = מחברת הרצאות */
(function () {
  const R = String.raw;
  window.EXAMPLES = {

  poly: [
    { title: 'נוסחאות וייטה', src: 'S',
      problem: R`מצאו את סכום ומכפלת השורשים של $2x^3-4x^2+3x-10=0$.`,
      solution: R`נחלק ב-2 כדי לקבל פולינום מתוקן: $x^3-2x^2+1.5x-5=0$.<br>
סכום השורשים: $-a_{n-1}=-(-2)=2$.<br>
מכפלת השורשים: $(-1)^na_0=(-1)^3\cdot(-5)=5$.` },
    { title: 'שורש x=1 ו-x=−1 "במבט"', src: 'S',
      problem: R`(א) האם $x=1$ שורש של $P(x)=x^3-2x^2-x+2$? (ב) האם $x=-1$ שורש של $P(x)=x^3+2x^2-x-2$?`,
      solution: R`(א) סכום המקדמים: $1-2-1+2=0$ ⇒ $x=1$ שורש.<br>
(ב) מקדמים במקומות האי-זוגיים ($x^3,x^1$): $1+(-1)=0$; במקומות הזוגיים ($x^2,x^0$): $2+(-2)=0$. הסכומים שווים ⇒ $x=-1$ שורש.` },
    { title: 'משפט השורש הרציונלי', src: 'S',
      problem: R`אילו מועמדים לשורש רציונלי יש ל-$2x^3-3x^2-11x+6=0$?`,
      solution: R`$p$ מחלק את $a_0=6$: $\pm1,\pm2,\pm3,\pm6$. $q$ מחלק את $a_3=2$: $\pm1,\pm2$.<br>
המועמדים $\frac pq$: $\ \pm1,\pm2,\pm3,\pm6,\pm\frac12,\pm\frac32$ – אם יש שורש רציונלי, הוא ביניהם.` },
    { title: 'ריבוי שורש בעזרת נגזרות', src: 'S',
      problem: R`מה הריבוי של השורש $1$ ב-$P(x)=(x-1)^3$?`,
      solution: R`$P(1)=0$, $P'(1)=0$, $P''(1)=0$, אבל $P'''(1)\neq0$ ⇒ ריבוי 3.` },
    { title: 'כפל מקוצר', src: 'S',
      problem: R`פרקו את $x^3-8$ ואת $x^3+27$.`,
      solution: R`$x^3-8=(x-2)(x^2+2x+4)$ (הפרש מעוקבים), $\ x^3+27=(x+3)(x^2-3x+9)$ (סכום מעוקבים).` }
  ],

  complex: [
    { title: 'שורשי היחידה מסדר 3', src: 'N',
      problem: R`מצאו את פתרונות $w^3=1$, ויהיו $w_1,w_2,w_3$ הפתרונות. חשבו $w_1^{2025}+w_2^{2025}+w_3^{2025}$.`,
      solution: R`$w_k=\operatorname{cis}\frac{2\pi k}{3}$: $\operatorname{cis}0^\circ,\operatorname{cis}120^\circ,\operatorname{cis}240^\circ$.<br>
$2025=3\cdot675$, ולכן $w_j^{2025}=(w_j^3)^{675}=1$ לכל $j$, והסכום הוא $3$.` },
    { title: 'מודול של מנה בלי חילוק', src: 'S',
      problem: R`הראו ש-$\left|\frac{z_1}{z_2}\right|=\frac{|z_1|}{|z_2|}$ מתוך נוסחת החילוק.`,
      solution: R`$\frac{z_1}{z_2}=\frac{z_1\bar z_2}{|z_2|^2}$, ולכן $\left|\frac{z_1}{z_2}\right|=\frac{|z_1||\bar z_2|}{|z_2|^2}=\frac{|z_1||z_2|}{|z_2|^2}=\frac{|z_1|}{|z_2|}$.` },
    { title: 'שורשים צמודים', src: 'S',
      problem: R`נתון שבפולינום עם מקדמים ממשיים $2+3i$ הוא שורש. מה עוד ידוע?`,
      solution: R`לפי משפט השורשים הצמודים, גם $2-3i$ שורש. בנוסף, בפולינום ממשי ממעלה אי-זוגית חייב להיות לפחות שורש ממשי אחד (השורשים הלא-ממשיים באים בזוגות).` }
  ],

  matrices: [
    { title: 'כפל מטריצות', src: 'S',
      problem: R`חשבו $\begin{pmatrix}1&0\\2&1\end{pmatrix}\begin{pmatrix}3&4\\0&5\end{pmatrix}$.`,
      solution: R`$$\begin{pmatrix}1\cdot3+0\cdot0&1\cdot4+0\cdot5\\2\cdot3+1\cdot0&2\cdot4+1\cdot5\end{pmatrix}=\begin{pmatrix}3&4\\6&13\end{pmatrix}$$` },
    { title: 'מחלקי אפס', src: 'N',
      problem: R`הראו שמ-$AB=0$ לא נובע $A=0$ או $B=0$.`,
      solution: R`$$\begin{pmatrix}1&1\\1&1\end{pmatrix}\begin{pmatrix}1&1\\-1&-1\end{pmatrix}=\begin{pmatrix}0&0\\0&0\end{pmatrix}$$ ושתי המטריצות שונות מאפס.` },
    { title: 'שחלוף ועקבה', src: 'S',
      problem: R`חשבו $\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}^T$ ואת $\operatorname{tr}\begin{pmatrix}2&1\\0&3\end{pmatrix}$.`,
      solution: R`$\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}^T=\begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}$, $\ \operatorname{tr}=2+3=5$.` }
  ],

  systems: [
    { title: 'שלושת המקרים', src: 'S',
      problem: R`קבעו את מספר הפתרונות: (1) $x+y=2,\ x-y=0$; (2) $x+y+z=5,\ 2x+2y+2z=10$; (3) $x+y=2,\ x+y=5$.`,
      solution: R`(1) $\begin{pmatrix}1&1&|&2\\0&-2&|&-2\end{pmatrix}$: $r(A|b)=r(A)=2=n$ ⇒ פתרון יחיד $(1,1)$.<br>
(2) $\begin{pmatrix}1&1&1&|&5\\0&0&0&|&0\end{pmatrix}$: דרגה 1, 3 נעלמים ⇒ 2 משתנים חופשיים, אינסוף פתרונות.<br>
(3) $\begin{pmatrix}1&1&|&2\\0&0&|&3\end{pmatrix}$: שורת סתירה $0=3$ ⇒ אין פתרון.` },
    { title: 'אלימינציה של גאוס', src: 'S',
      problem: R`פתרו $x+2y=7,\ 3x-5y=13$.`,
      solution: R`$$\begin{pmatrix}1&2&|&7\\3&-5&|&13\end{pmatrix}\xrightarrow{R_2\to R_2-3R_1}\begin{pmatrix}1&2&|&7\\0&-11&|&-8\end{pmatrix}$$
$-11y=-8\Rightarrow y=\frac8{11}$, ובחילוץ לאחור $x=7-2y=\frac{61}{11}$.` },
    { title: 'משתנים חופשיים', src: 'S',
      problem: R`נתונה המטריצה המדורגת $\begin{pmatrix}1&1&1&1\\0&0&3&1\end{pmatrix}$ של מערכת הומוגנית. זהו משתנים תלויים וחופשיים.`,
      solution: R`$n=4$, $r=2$. איברים מובילים בעמודות 1 ו-3 ⇒ $x_1,x_3$ תלויים; $x_2,x_4$ חופשיים; דרגות חופש $n-r=2$.` },
    { title: 'דרגה', src: 'S',
      problem: R`מצאו את $r(A)$ עבור $A=\begin{pmatrix}1&2&1\\2&4&0\\3&6&1\end{pmatrix}$.`,
      solution: R`$A\sim\begin{pmatrix}1&2&0\\0&0&1\\0&0&0\end{pmatrix}$ ⇒ $r(A)=2$.` },
    { title: 'מערכת הומוגנית', src: 'S',
      problem: R`כמה משתנים חופשיים יש ל-$(A|0)=\begin{pmatrix}1&2&3&|&0\\2&4&6&|&0\end{pmatrix}$?`,
      solution: R`$R_2\to R_2-2R_1$ מאפסת את השורה השנייה: הדרגה 1 ויש 3 נעלמים ⇒ 2 משתנים חופשיים (אינסוף פתרונות).` }
  ],

  vs: [
    { title: 'בדיקת תת-מרחב', src: 'N',
      problem: R`ב-$V=\mathbb{R}^2$: האם $W=\{(x,y)\mid 2x-y=0\}$ תמ"ו? האם $W_2=\{(x,y)\mid x-y=1\}$ תמ"ו?`,
      solution: R`$W$: $(0,0)\in W$. אם $(x,y),(a,b)\in W$ אז $2(x+a)-(y+b)=(2x-y)+(2a-b)=0$, ו-$2\alpha x-\alpha y=\alpha(2x-y)=0$. לכן תמ"ו.<br>
$W_2$: $0-0=0\neq1$, כלומר $(0,0)\notin W_2$ ⇒ לא תמ"ו.` },
    { title: 'הפרת סגירות לכפל בסקלר', src: 'S',
      problem: R`האם $\mathbb{Z}^2$ (וקטורים עם רכיבים שלמים) הוא מ"ו מעל $\mathbb{R}$?`,
      solution: R`$v=(1,1)\in\mathbb{Z}^2$ ו-$\alpha=0.5$: $\alpha v=(0.5,0.5)\notin\mathbb{Z}^2$ ⇒ לא מ"ו.` },
    { title: 'איחוד צירים', src: 'S',
      problem: R`הראו שאיחוד הצירים ב-$\mathbb{R}^2$ אינו תמ"ו.`,
      solution: R`$(1,0)$ ו-$(0,1)$ באיחוד, אבל סכומם $(1,1)$ לא באיחוד. (בהתאם למשפט: אף ציר אינו מוכל בשני.)` },
    { title: 'סימטריות ⊕ אנטי-סימטריות', src: 'N',
      problem: R`הראו ש-$F^{n\times n}=U_1\oplus U_2$, כאשר $U_1$ הסימטריות ו-$U_2$ האנטי-סימטריות.`,
      solution: R`כל מטריצה ניתנת לכתיבה כ-$A=\frac12(A+A^t)+\frac12(A-A^t)$, כשהמחובר הראשון סימטרי והשני אנטי-סימטרי – לכן הסכום הוא כל המרחב. מטריצה שהיא גם סימטרית וגם אנטי-סימטרית מקיימת $A=-A$, כלומר $A=0$, ולכן $U_1\cap U_2=\{0\}$ – הסכום ישר.` },
    { title: 'סכום שאינו ישר', src: 'N',
      problem: R`ב-$\mathbb{R}^3$: $U=\{(a,b,0)\}$, $W=\{(0,x,y)\}$. האם $U+W$ ישר? האם $U+W=\mathbb{R}^3$?`,
      solution: R`$U\cap W=\{(0,x,0)\}\neq\{0\}$ ⇒ לא ישר. אבל $(\alpha,\beta,\gamma)=(\alpha,\beta,0)+(0,0,\gamma)$ ⇒ $U+W=\mathbb{R}^3$. (ההצגה לא יחידה.)` },
    { title: 'סכום ישר שאינו כל המרחב', src: 'N',
      problem: R`ב-$\mathbb{R}^4$: $U=\{(a,0,0,a)\}$, $W=\{(0,b,0,0)\}$. האם $(1,2,0,1)\in U+W$? האם $U+W=\mathbb{R}^4$? האם הסכום ישר?`,
      solution: R`$(1,2,0,1)=(1,0,0,1)+(0,2,0,0)$ ⇒ כן. $U+W\neq\mathbb{R}^4$: למשל $(1,2,3,4)$ לא מתקבל. הסכום ישר כי $U\cap W=\{0\}$.` }
  ],

  span: [
    { title: 'צירוף ליניארי', src: 'SN',
      problem: R`הציגו את $(5,2,7)$ כצירוף של $v_1=(1,0,0),\ v_2=(1,1,0),\ v_3=(1,1,1)$.`,
      solution: R`$(5,2,7)=\alpha(1,0,0)+\beta(1,1,0)+\gamma(1,1,1)$: $\gamma=7$, $\beta+\gamma=2\Rightarrow\beta=-5$, $\alpha+\beta+\gamma=5\Rightarrow\alpha=3$.
$$(5,2,7)=3v_1-5v_2+7v_3$$` },
    { title: 'לא צירוף ליניארי', src: 'N',
      problem: R`האם $x^2-1$ ק"ל של $x+1$ ו-$x-1$?`,
      solution: R`לא: כל צירוף $\alpha(x+1)+\beta(x-1)$ הוא ממעלה $\le1$, ולכן $x^2-1\neq\alpha(x+1)+\beta(x-1)$.` },
    { title: 'מרחב נפרש', src: 'SN',
      problem: R`תארו את $W=\operatorname{Sp}\{(1,0,0),(0,1,1)\}$.`,
      solution: R`$W=\{\alpha(1,0,0)+\beta(0,1,1)\}=\{(\alpha,\beta,\beta)\mid\alpha,\beta\in\mathbb{R}\}$ – הקואורדינטה השנייה והשלישית שוות. $(5,4,4)\in W$, $(1,2,3)\notin W$.` },
    { title: 'בדיקת פרישה ב-ℝ³', src: 'S',
      problem: R`האם $S=\{(1,2,3),(0,1,1),(2,5,7)\}$ פורשת את $\mathbb{R}^3$?`,
      solution: R`$$\begin{pmatrix}1&0&2&x\\2&1&5&y\\3&1&7&z\end{pmatrix}\to\begin{pmatrix}1&0&2&x\\0&1&1&y-2x\\0&0&0&z-y-x\end{pmatrix}$$
שורת אפסים במקדמים ⇒ פתיר רק אם $z-y-x=0$. $S$ פורשת רק מישור, לא את $\mathbb{R}^3$; למשל $(1,1,1)\notin\operatorname{Sp}(S)$.` },
    { title: 'צמצום לבסיס', src: 'S',
      problem: R`מצאו בסיס ל-$\operatorname{Sp}(S)$, $S=\{v_1=(1,1,1),v_2=(2,2,2),v_3=(0,1,1)\}$.`,
      solution: R`נציב כעמודות: $\begin{pmatrix}1&2&0\\1&2&1\\1&2&1\end{pmatrix}\to\begin{pmatrix}1&2&0\\0&0&1\\0&0&0\end{pmatrix}$. איברים מובילים בעמודות 1,3 ⇒ בסיס $\{v_1,v_3\}$.` },
    { title: 'בדיקת תלות', src: 'S',
      problem: R`האם $\{(1,2),(2,4)\}$ ת"ל? האם $\{(1,1,0),(0,1,1),(1,2,1)\}$ ת"ל?`,
      solution: R`(1) $2(1,2)-1(2,4)=(0,0)$ – צירוף לא טריוויאלי ⇒ ת"ל.<br>
(2) כשורות: $\begin{pmatrix}1&1&0\\0&1&1\\1&2&1\end{pmatrix}\xrightarrow{R_3-R_1}\begin{pmatrix}1&1&0\\0&1&1\\0&1&1\end{pmatrix}\xrightarrow{R_3-R_2}\begin{pmatrix}1&1&0\\0&1&1\\0&0&0\end{pmatrix}$ – התאפסה שורה ⇒ ת"ל.` },
    { title: 'קבוצה פורשת קטנה יותר', src: 'N',
      problem: R`מצאו קבוצה פורשת קטנה יותר ל-$\operatorname{Sp}\{(1,2,3),(4,5,6),(7,8,9)\}$.`,
      solution: R`$(7,8,9)=-1\cdot(1,2,3)+2\cdot(4,5,6)$ – ק"ל של האחרים, ולכן $\operatorname{Sp}\{(1,2,3),(4,5,6),(7,8,9)\}=\operatorname{Sp}\{(1,2,3),(4,5,6)\}$.` }
  ],

  basis: [
    { title: 'בדיקת בסיס ("השלישי חינם")', src: 'SN',
      problem: R`האם $S=\{(1,2,3),(1,1,1),(1,3,7)\}$ בסיס של $\mathbb{R}^3$?`,
      solution: R`3 וקטורים ו-$\dim\mathbb{R}^3=3$ ⇒ מספיק לבדוק בת"ל:
$\begin{pmatrix}1&2&3\\1&1&1\\1&3&7\end{pmatrix}\to\dots\to\begin{pmatrix}1&2&3\\0&-1&-2\\0&0&2\end{pmatrix}$ – דרגה 3, אין שורת אפסים ⇒ בת"ל ⇒ בסיס.` },
    { title: 'משפט המימדים הראשון', src: 'S',
      problem: R`$U,W\subseteq\mathbb{R}^4$ עם $\dim U=\dim W=3$ ו-$U+W=\mathbb{R}^4$. מה $\dim(U\cap W)$?`,
      solution: R`$4=3+3-\dim(U\cap W)\Rightarrow\dim(U\cap W)=2$ – המרחבים נחתכים במישור.` },
    { title: 'סימטריות + משולשיות עליונות', src: 'N',
      problem: R`הוכיחו שכל מטריצה $2\times2$ היא סכום של סימטרית ומשולשית עליונה.`,
      solution: R`$U$ – סימטריות, בסיס $\left\{\begin{pmatrix}1&0\\0&0\end{pmatrix},\begin{pmatrix}0&1\\1&0\end{pmatrix},\begin{pmatrix}0&0\\0&1\end{pmatrix}\right\}$, $\dim U=3$. $W$ – משולשיות עליונות, $\dim W=3$. החיתוך – האלכסוניות, ממימד 2. לכן $\dim(U+W)=3+3-2=4=\dim\mathbb{R}^{2\times2}$, כלומר $U+W=\mathbb{R}^{2\times2}$ (הסכום אינו ישר).` },
    { title: 'וקטור קואורדינטות', src: 'SN',
      problem: R`(א) $[p]_B$ עבור $p=5+3x-2x^2$ ו-$B=\{1,x,x^2\}$. (ב) $[A]_B$ עבור $A=\begin{pmatrix}1&3\\3&5\end{pmatrix}$ ו-$B=\left\{\begin{pmatrix}1&0\\0&0\end{pmatrix},\begin{pmatrix}1&1\\0&0\end{pmatrix},\begin{pmatrix}1&1\\1&0\end{pmatrix},\begin{pmatrix}1&1\\1&1\end{pmatrix}\right\}$.`,
      solution: R`(א) $p=5\cdot1+3\cdot x+(-2)x^2$ ⇒ $[p]_B=(5,3,-2)^t$.<br>
(ב) לפי הבסיס הסטנדרטי $[A]_E=(1,3,3,5)$. לפי $B$: $A=-2B_1+0B_2-2B_3+5B_4$, כלומר $[A]_B=(-2,0,-2,5)$. ובכיוון ההפוך: אם $[M]_B=(2,3,-1,4)$ אז $M=2B_1+3B_2-B_3+4B_4=\begin{pmatrix}8&6\\3&4\end{pmatrix}$.` },
    { title: 'יישום משפטי הדרגה', src: 'S',
      problem: R`(1) $A$ מסדר $4\times6$ עם $r(A)=3$ – מה מימד מרחב הפתרונות של $Ax=0$? (2) $A$ מסדר $3\times10$, $B$ מסדר $10\times3$ – מה ידוע על $r(AB)$?`,
      solution: R`(1) $\dim N(A)=n-r(A)=6-3=3$ – 3 משתנים חופשיים.<br>(2) $r(AB)\le\min\{r(A),r(B)\}\le3$.` }
  ],

  inverse: [
    { title: 'הופכית בדירוג (2×2)', src: 'S',
      problem: R`מצאו את ההופכית של $A=\begin{pmatrix}1&2\\3&5\end{pmatrix}$.`,
      solution: R`$$\left(\begin{array}{cc|cc}1&2&1&0\\3&5&0&1\end{array}\right)\xrightarrow{R_2-3R_1}\left(\begin{array}{cc|cc}1&2&1&0\\0&-1&-3&1\end{array}\right)\xrightarrow{-R_2}\left(\begin{array}{cc|cc}1&2&1&0\\0&1&3&-1\end{array}\right)\xrightarrow{R_1-2R_2}\left(\begin{array}{cc|cc}1&0&-5&2\\0&1&3&-1\end{array}\right)$$
$A^{-1}=\begin{pmatrix}-5&2\\3&-1\end{pmatrix}$ (בדיקה: $AA^{-1}=I$).` },
    { title: 'הופכית בדירוג (3×3)', src: 'N',
      problem: R`מצאו את ההופכית של $A=\begin{pmatrix}1&2&5\\2&3&-4\\3&5&2\end{pmatrix}$.`,
      solution: R`מדרגים $(A|I)$ עד $(I|A^{-1})$ ($R_2\to R_2-2R_1$, $R_3\to R_3-3R_1$, וכן הלאה) ומקבלים
$$A^{-1}=\begin{pmatrix}-26&-21&23\\16&13&-14\\-1&-1&1\end{pmatrix}$$` },
    { title: 'הופכית ממשוואה', src: 'S',
      problem: R`נתון $A^2-3A+I=0$. הוכיחו ש-$A$ הפיכה ומצאו $A^{-1}$.`,
      solution: R`$I=3A-A^2=A(3I-A)$. מטריצה ריבועית עם הופכית מצד אחד – הפיכה, ו-$A^{-1}=3I-A$.` },
    { title: 'מטריצה אלמנטרית', src: 'SN',
      problem: R`בצעו $R_2\to R_2-3R_1$ על $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ בעזרת כפל במטריצה אלמנטרית.`,
      solution: R`$E=\begin{pmatrix}1&0\\-3&1\end{pmatrix}$ (הפעולה על $I$), ו-$EA=\begin{pmatrix}a&b\\c-3a&d-3b\end{pmatrix}$.<br>
דוגמה מהמחברת: $A=\begin{pmatrix}1&2&2\\3&5&1\end{pmatrix}$ מגיעה לקנונית $\begin{pmatrix}1&0&-8\\0&1&5\end{pmatrix}$ ע"י $E_3E_2E_1A$.` },
    { title: 'הופכית מצד אחד – מטריצה מלבנית', src: 'S',
      problem: R`הראו שבמטריצה לא ריבועית הופכית מצד אחד אינה מספיקה.`,
      solution: R`$A=(1\ 0)$, $B=\binom10$: $AB=(1)=I_1$, אבל $BA=\begin{pmatrix}1&0\\0&0\end{pmatrix}\neq I_2$.` }
  ],

  det: [
    { title: 'פיתוח לפי שורה', src: 'SN',
      problem: R`חשבו $\begin{vmatrix}1&2&3\\4&5&6\\7&8&9\end{vmatrix}$.`,
      solution: R`$$1\begin{vmatrix}5&6\\8&9\end{vmatrix}-2\begin{vmatrix}4&6\\7&9\end{vmatrix}+3\begin{vmatrix}4&5\\7&8\end{vmatrix}=1(-3)-2(-6)+3(-3)=0$$ ⇒ המטריצה אינה הפיכה.` },
    { title: 'ניצול אפסים', src: 'S',
      problem: R`חשבו $|A|$ עבור $A=\begin{pmatrix}1&2&3\\0&0&4\\5&6&7\end{pmatrix}$.`,
      solution: R`פיתוח לפי שורה 2: $|A|=4\cdot(-1)^{2+3}\begin{vmatrix}1&2\\5&6\end{vmatrix}=-4(6-10)=16$.` },
    { title: 'משולשית', src: 'S',
      problem: R`חשבו $\begin{vmatrix}2&5&8\\0&3&9\\0&0&4\end{vmatrix}$.`,
      solution: R`מכפלת האלכסון: $2\cdot3\cdot4=24$.` },
    { title: 'סכום שורות קבוע', src: 'S',
      problem: R`חשבו $|A|$ עבור $A=\begin{pmatrix}1&2&3\\3&1&2\\2&3&1\end{pmatrix}$.`,
      solution: R`סכום כל שורה 6. $C_1\to C_1+C_2+C_3$ ואז הוצאת 6:
$$|A|=6\begin{vmatrix}1&2&3\\1&1&2\\1&3&1\end{vmatrix}=6\begin{vmatrix}1&2&3\\0&-1&-1\\0&1&-2\end{vmatrix}=6\cdot(2+1)=18$$` },
    { title: 'דטרמיננטה עם נעלם', src: 'S',
      problem: R`חשבו $\begin{vmatrix}1-x&2\\3&4-x\end{vmatrix}$.`,
      solution: R`$(1-x)(4-x)-6=x^2-5x+4-6=x^2-5x-2$. המטריצה לא הפיכה בדיוק עבור שורשי $x^2-5x-2=0$.` },
    { title: 'כלל קרמר', src: 'SN',
      problem: R`פתרו $3x-5y=10,\ 7x+4y=-3$.`,
      solution: R`$|A|=\begin{vmatrix}3&-5\\7&4\end{vmatrix}=47$, $\ |A_x|=\begin{vmatrix}10&-5\\-3&4\end{vmatrix}=25$, $\ |A_y|=\begin{vmatrix}3&10\\7&-3\end{vmatrix}=-79$.
$$x=\tfrac{25}{47},\qquad y=-\tfrac{79}{47}$$` },
    { title: 'ונדרמונדה', src: 'S',
      problem: R`חשבו $\begin{vmatrix}1&1&1\\1&2&4\\1&3&9\end{vmatrix}$.`,
      solution: R`הבסיסים (העמודה השנייה): $x_1=1,x_2=2,x_3=3$. $\det=(2-1)(3-1)(3-2)=2$. (לא מחסרים $9-4$ – אלה כבר חזקות.)` },
    { title: 'הופכית 2×2 מעל ℂ', src: 'N',
      problem: R`מצאו את ההופכית של $A=\begin{pmatrix}1+i&i\\3i&1-i\end{pmatrix}$.`,
      solution: R`$|A|=(1+i)(1-i)-3i\cdot i=2+3=5\neq0$, ולכן $A^{-1}=\frac15\begin{pmatrix}1-i&-i\\-3i&1+i\end{pmatrix}$.` }
  ],

  lt: [
    { title: 'בדיקת ליניאריות', src: 'N',
      problem: R`האם $T:\mathbb{R}^2\to\mathbb{R}^3$, $T(a,b)=(a-b,2a,0)$ ליניארית? ו-$T:\mathbb{R}\to\mathbb{R}$, $T(x)=7x-5$?`,
      solution: R`(1) עבור $w=(a,b)$, $v=(x,y)$: $T(w+v)=(a+x-b-y,\ 2(a+x),\ 0)=T(w)+T(v)$, ו-$T(\alpha w)=(\alpha a-\alpha b,2\alpha a,0)=\alpha T(w)$ ⇒ ליניארית.<br>
(2) $T(1)+T(2)=2+9=11\neq T(3)=16$ (וגם $T(0)=-5\neq0$) ⇒ לא ליניארית.` },
    { title: 'גרעין ותמונה', src: 'N',
      problem: R`$T:\mathbb{R}^2\to\mathbb{R}^2$, $T(x,y)=(x-y,0)$. מצאו בסיסים לגרעין ולתמונה.`,
      solution: R`$\ker T=\{(x,x)\}=\operatorname{sp}\{(1,1)\}$, מימד 1. $\operatorname{Im}T=\{(\alpha,0)\}=\operatorname{sp}\{(1,0)\}$, מימד 1. ($T$ לא על כי $1\neq2=\dim\mathbb{R}^2$.)` },
    { title: 'דוגמה מסכמת – גרעין, תמונה, חח"ע ועל', src: 'SN',
      problem: R`$T:\mathbb{R}_2[x]\to\mathbb{R}^{2\times2}$, $T(p)=\begin{pmatrix}p(0)&p'(0)\\p(0)-p'(0)&p'(1)\end{pmatrix}$.`,
      solution: R`$T(a+bx+cx^2)=\begin{pmatrix}a&b\\a-b&b+2c\end{pmatrix}$.<br>
<b>גרעין:</b> $a=0,\ b=0,\ b+2c=0\Rightarrow c=0$ ⇒ $\ker T=\{0\}$ ⇒ חח"ע.<br>
<b>תמונה:</b> $T(1)=\begin{pmatrix}1&0\\1&0\end{pmatrix}$, $T(x)=\begin{pmatrix}0&1\\-1&1\end{pmatrix}$, $T(x^2)=\begin{pmatrix}0&0\\0&2\end{pmatrix}$ – פורשות את התמונה ובת"ל, $\dim\operatorname{Im}T=3$.<br>
<b>על?</b> $3\neq4=\dim\mathbb{R}^{2\times2}$ ⇒ לא על. <b>אימות:</b> $\dim\mathbb{R}_2[x]=3=0+3$ ✓.` },
    { title: 'העתקת כפל במטריצה', src: 'N',
      problem: R`$T:\mathbb{R}^3\to\mathbb{R}^3$, $T(v)=Av$ עם $A=\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}$. מצאו בסיס לתמונה ולגרעין.`,
      solution: R`$\operatorname{Im}T=\operatorname{Col}(A)=\operatorname{Row}(A^t)$; מדירוג $A^t$: $B_{\operatorname{Im}T}=\{(1,0,-1),(0,1,2)\}$, $\dim\operatorname{Im}T=r(A)=2$.<br>
גרעין: $A\to\begin{pmatrix}1&0&-1\\0&1&2\\0&0&0\end{pmatrix}$ ⇒ $a-c=0,\ b+2c=0$ ⇒ $(c,-2c,c)$, $B_{\ker T}=\{(1,-2,1)\}$, $\dim\ker T=3-2=1$.` },
    { title: 'משפט הממד – מסקנות', src: 'N',
      problem: R`(1) האם יכולה $T:\mathbb{R}^3\to\mathbb{R}^2$ להיות חח"ע? (2) האם $T:\mathbb{R}^2\to\mathbb{R}^3$ יכולה להיות על?`,
      solution: R`(1) $3=\dim\ker T+\dim\operatorname{Im}T$ ו-$\dim\operatorname{Im}T\le2$ ⇒ $\dim\ker T\ge1$ ⇒ לא חח"ע.<br>
(2) $\dim\operatorname{Im}T\le2\lt 3$ ⇒ לא על (למשל $T(x,y)=(x,y,0)$).` }
  ],

  repr: [
    { title: 'מטריצה מייצגת – פולינומים', src: 'S',
      problem: R`$T:P_2[x]\to P_2[x]$, $T(p)=p'+p(1)$. מצאו $[T]_B$ לפי $B=\{1,x,x^2\}$.`,
      solution: R`$T(1)=0+1=1\to(1,0,0)^t$; $T(x)=1+1=2\to(2,0,0)^t$; $T(x^2)=2x+1\to(1,2,0)^t$.
$$[T]_B=\begin{pmatrix}1&2&1\\0&0&2\\0&0&0\end{pmatrix}$$
שימו לב: העמודה השנייה אינה $(0,1,0)$ – הוספנו $p(1)=1$.` },
    { title: 'העתקה בין מרחבים שונים', src: 'S',
      problem: R`$T:P_1[x]\to\mathbb{R}^2$, $T(a+bx)=(a+b,a-b)$. מצאו $[T]^E_B$ לפי $B=\{1,x\}$ ו-$E$ הסטנדרטי.`,
      solution: R`$T(1)=(1,1)$, $T(x)=(1,-1)$ ⇒ $[T]^E_B=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.` },
    { title: 'העתקה על מטריצות 2×2', src: 'S',
      problem: R`(א) $T(A)=A\begin{pmatrix}-1&2\\1&-2\end{pmatrix}$; (ב) $T(A)=\begin{pmatrix}1&1\\0&0\end{pmatrix}A$. מצאו $[T]_E$.`,
      solution: R`(א) $T\begin{pmatrix}a&b\\c&d\end{pmatrix}=\begin{pmatrix}-a+b&2a-2b\\-c+d&2c-2d\end{pmatrix}$ ⇒ $[T]_E=\begin{pmatrix}-1&1&0&0\\2&-2&0&0\\0&0&-1&1\\0&0&2&-2\end{pmatrix}$.<br>
(ב) $\begin{pmatrix}a+c&b+d\\0&0\end{pmatrix}$ ⇒ $[T]_E=\begin{pmatrix}1&0&1&0\\0&1&0&1\\0&0&0&0\\0&0&0&0\end{pmatrix}$.` },
    { title: 'אותו אופרטור – שני בסיסים', src: 'N',
      problem: R`$T:\mathbb{R}_2[x]\to\mathbb{R}_2[x]$, $T(a+bx+cx^2)=(7a+4b+4c)+(4a+7b+4c)x+(4a+4b+7c)x^2$. מצאו $[T]_E$ ו-$[T]_B$ עבור $B=\{1+x+x^2,\ 1-x,\ 1-x^2\}$.`,
      solution: R`$[T]_E=\begin{pmatrix}7&4&4\\4&7&4\\4&4&7\end{pmatrix}$.<br>
$T(1+x+x^2)=15+15x+15x^2=15v_1$, $\ T(1-x)=3-3x=3v_2$, $\ T(1-x^2)=3-3x^2=3v_3$ ⇒ $[T]_B=\begin{pmatrix}15&0&0\\0&3&0\\0&0&3\end{pmatrix}$ – אלכסונית.` },
    { title: 'מטריצת מעבר', src: 'S',
      problem: R`$B=\{e_1,e_2\}$, $S=\{(1,1),(1,2)\}$. מצאו $P_{B\to S}$ ואת $[v]_B$ אם $[v]_S=(3,-1)^T$.`,
      solution: R`$P_{B\to S}=\begin{pmatrix}1&1\\1&2\end{pmatrix}$ (איברי $S$ כעמודות). $[v]_B=P[v]_S=\begin{pmatrix}1&1\\1&2\end{pmatrix}\binom{3}{-1}=\binom21$. בכיוון ההפוך משתמשים ב-$P^{-1}$.` },
    { title: 'מטריצות דומות', src: 'N',
      problem: R`$A=\begin{pmatrix}1&1\\2&2\end{pmatrix}$. חשבו $P^{-1}AP$ עבור $P=\begin{pmatrix}1&2\\1&3\end{pmatrix}$ ועבור $Q=\begin{pmatrix}1&1\\-1&2\end{pmatrix}$.`,
      solution: R`$P^{-1}=\begin{pmatrix}3&-2\\-1&1\end{pmatrix}$, $\ M=P^{-1}AP=\begin{pmatrix}-2&-5\\2&5\end{pmatrix}$ – דומה ל-$A$.<br>
$Q^{-1}AQ=\begin{pmatrix}0&0\\0&3\end{pmatrix}$ – אלכסונית. אם $A=[T]_E$ עבור $T(a+bx)=(a+b)+(2a+2b)x$, אז לפי $B=\{1-x,\ 1+2x\}$ (עמודות $Q$): $[T]_B=\operatorname{diag}(0,3)$.` }
  ],

  eigen: [
    { title: 'ע"ע ו"ע של אופרטור', src: 'N',
      problem: R`$T:\mathbb{R}^2\to\mathbb{R}^2$, $T(a,b)=(2a+b,\ 2a+b)$. מצאו ו"ע ובסיס שבו $T$ אלכסוני.`,
      solution: R`$T(1,0)=(2,2)$ – לא כפולה של $(1,0)$, לכן לא ו"ע. $T(1,1)=(3,3)=3(1,1)$ ⇒ ו"ע עם $\lambda=3$. $T(1,-2)=(0,0)=0\cdot(1,-2)$ ⇒ ו"ע עם $\lambda=0$.
$B=\{(1,1),(1,-2)\}$ בסיס של ו"ע ⇒ $[T]_B=\begin{pmatrix}3&0\\0&0\end{pmatrix}$.` },
    { title: 'פולינום אופייני 2×2 ומעבר לאופרטור', src: 'N',
      problem: R`$T:\mathbb{R}_1[x]\to\mathbb{R}_1[x]$ עם $[T]_E=A=\begin{pmatrix}1&2\\7&-4\end{pmatrix}$. מצאו את הע"ע ו"ע של $T$ עבור $\lambda=3$.`,
      solution: R`$|\lambda I-A|=(\lambda-1)(\lambda+4)-14=\lambda^2+3\lambda-18=(\lambda+6)(\lambda-3)$ ⇒ $\lambda_1=3,\ \lambda_2=-6$.<br>
$A\binom11=\binom33=3\binom11$ ⇒ $u=(1,1)$ ו"ע של $A$. בתרגום חזרה לפולינומים: $v=1\cdot1+1\cdot x=1+x$ ו"ע של $T$ עם ע"ע 3.` },
    { title: 'תהליך לכסון מלא', src: 'SN',
      problem: R`לכסנו את $A=\begin{pmatrix}1&1&-2\\-1&3&-2\\-1&1&0\end{pmatrix}$.`,
      solution: R`<b>שלב 1:</b> $f_A(\lambda)=|\lambda I-A|=\lambda(\lambda-2)^2$ ⇒ $\lambda_1=0$ (ר"א 1), $\lambda_2=2$ (ר"א 2).<br>
<b>שלב 2:</b> $\lambda=0$: $A\vec v=0$ ⇒ $V_0=\operatorname{sp}\{(1,1,1)\}$, ר"ג 1.
$\lambda=2$: $(2I-A)\vec v=0$: $\begin{pmatrix}1&-1&2\\1&-1&2\\1&-1&2\end{pmatrix}\to\begin{pmatrix}1&-1&2\\0&0&0\\0&0&0\end{pmatrix}$ ⇒ $V_2=\operatorname{sp}\{(1,1,0),(-2,0,1)\}$, ר"ג 2.<br>
<b>שלב 3:</b> ר"א = ר"ג לכל ע"ע ⇒ לכסינה:
$$P=\begin{pmatrix}1&1&-2\\1&1&0\\1&0&1\end{pmatrix},\quad D=\begin{pmatrix}0&0&0\\0&2&0\\0&0&2\end{pmatrix}$$
<b>שלב 4 (אופרטור על $P_2[x]$):</b> הו"ע מתורגמים לפולינומים $1+x+x^2$, $1+x$, $-2+x^2$.` },
    { title: 'קיילי-המילטון – הופכית', src: 'SN',
      problem: R`$A=\begin{pmatrix}3&4\\7&0\end{pmatrix}$. מצאו $A^{-1}$ כפולינום ב-$A$.`,
      solution: R`$f_A(\lambda)=\lambda^2-\operatorname{tr}(A)\lambda+|A|=\lambda^2-3\lambda-28$. לפי ק"ה: $A^2-3A-28I=0$ ⇒ $A(A-3I)=28I$ ⇒ $A^{-1}=\frac1{28}(A-3I)$.` },
    { title: 'קיילי-המילטון – חזקות', src: 'S',
      problem: R`נתון $A^2=3A+28I$. הביעו את $A^3$ כצירוף של $A$ ו-$I$.`,
      solution: R`$A^3=3A^2+28A=3(3A+28I)+28A=37A+84I$. כל חזקה $A^k$ ניתנת לכתיבה כצירוף של $I,\dots,A^{n-1}$.` },
    { title: 'לכסון מעל ℝ לעומת ℂ', src: 'S',
      problem: R`למטריצה $2\times2$ יש פ"א $\lambda^2-5\lambda+17$. האם היא לכסינה מעל $\mathbb{R}$? מעל $\mathbb{C}$?`,
      solution: R`$\Delta=25-68=-43\lt 0$. מעל $\mathbb{R}$: אין שורשים ממשיים, הפ"א לא מתפרק ⇒ לא לכסינה. מעל $\mathbb{C}$: שני שורשים מרוכבים שונים ⇒ לכסינה בהכרח.` },
    { title: 'נילפוטנטית', src: 'S',
      problem: R`$A\neq0$ ו-$A^k=0$ עבור $k\gt 1$. האם $A$ לכסינה?`,
      solution: R`לעולם לא. הע"ע היחיד הוא 0 עם ר"א $n$; לכסינות דורשת ר"ג $n$, כלומר $\dim N(A)=n$ ⇒ $A=0$ – סתירה.` }
  ]
  };
})();
