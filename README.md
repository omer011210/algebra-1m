# אלגברה 1מ – אתר לימוד

אתר סטטי (HTML/CSS/JS בלבד) לאלגברה 1מ: הגדרות ומשפטים, דוגמאות פתורות ושאלות ממבחני עבר – לפי 12 נושאי הקורס.

## העלאה ל-GitHub Pages
1. צרו מאגר חדש ב-GitHub והעלו את כל תוכן התיקייה (כולל `.nojekyll`) לשורש המאגר.
2. Settings → Pages → Source: `Deploy from a branch`, Branch: `main`, תיקייה `/ (root)`.
3. אחרי דקה-שתיים האתר יעלה בכתובת `https://<user>.github.io/<repo>/`.

## מבנה
```
index.html            מעטפת האתר
css/style.css         עיצוב (RTL, מצב כהה, נייד)
js/app.js             ניתוב, תצוגה, רמזים/פתרונות, סימון ✓ (localStorage)
data/topics.js        רשימת הנושאים
data/theorems.js      הגדרות ומשפטים לפי נושא
data/examples.js      דוגמאות פתורות לפי נושא
data/practice/*.js    שאלות ממבחני עבר – קובץ לכל מועד
```

## עריכת תוכן
כל פריט הוא אובייקט JS עם טקסט HTML ונוסחאות LaTeX בין `$...$` (בשורה) או `$$...$$` (בתצוגה). בתוך נוסחה כתבו `\lt` / `\gt` במקום `<` / `>`.
שאלת תרגול: `{ exam, q, topic, type: 'open'|'tf'|'mc', text, options?, answer?, hint, solution }`.

הנוסחאות מוצגות עם KaTeX (נטען מ-cdnjs), והגופנים מ-Google Fonts – נדרש חיבור לאינטרנט.
