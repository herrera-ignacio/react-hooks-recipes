import * as React from "react";
import { calculatePrime, translations, formatNumberToString } from "./utils";

export default function LocalizedPrimeNumbers() {
  const [count, setCount] = React.useState(1);
  const [locale, setLocale] = React.useState("en-US");

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleLocaleChange = (e) => {
    console.log(e.target.value)
    setLocale(e.target.value);
  };

  const nthprime = React.useMemo(() => calculatePrime(count), [count]);

  return (
    <div>
      <header>
        <select value={locale} onChange={handleLocaleChange}>
          <option value="en-US">English (US)</option>
          <option value="es-ES">Español (ES)</option>
        </select>

        <button className="primary" onClick={handleClick}>
          {translations[locale].nextPrime}
        </button>
      </header>
      <p>
        {translations[locale].nthPrime(
          formatNumberToString(count, locale),
          nthprime
        )}
      </p>
    </div>
  );
}
