const intToRoman = (int: number): string => {
  let res = "";

  if (isNaN(int) || int < 1 || int > 3999) {
    throw new Error(
      "Неверное число. Поддерживается только для диапазона от 1 до 3999."
    );
  }

  const romanNumerals: { value: number; numeral: string }[] = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  for (const numeral of romanNumerals) {
    /**
     * Перебираем массив romanNumerals и добавляем соответствующую римскую цифру
     * в результат, если значение int больше или равно значению цифры.
     *
     * Затем вычитаем значение цифры из int и продолжаем процесс до тех пор,
     * пока не будет обработано все число.
     *
     * -----
     *
     * Пока число int больше или равно numeral.value,
     * т.е. значение int больше или равно значению римской цифры,
     * делаем следующее:
     *
     * 1) в результат добавляем римскую цифру (numeral.numeral)
     * к конечному результату (res).
     * Напр., если текущая римская цифра - { value: 1000, numeral: "M" },
     * то строка "М" будет добавлена к результату res.
     * 2) из входящей цифры (int) вычитаем значение римской цифры (numeral.value).
     * Напр., если текущая римская цифра - { value: 1000, numeral: "M" }, и исходное число (int)
     * равно 2023, то после выполнения этой строки значение int станет 1023.
     *
     * Цикл while продолжает выполняться, пока значение int остается больше или равным значению текущей
     * римской цифры (numeral.value). Когда это условия становится ложным, цикл завершается,
     * и управление возвращается к циклу for, который переходит к следующей римской цифре для проверки.
     *
     * Таким образом, цикл while с помощью объектов romanNumerals конвертирует число int в
     * римские цифры, добавляя соответствующе цифры к результату res и вычитая их
     * из значения int.
     */
    while (int >= numeral.value) {
      res += numeral.numeral;
      int -= numeral.value;
    }
  }

  return res;
};

console.log(intToRoman(1998));
console.log(intToRoman(1000));
console.log(intToRoman(58));
console.log(intToRoman(55));
console.log(intToRoman(3));
console.log(intToRoman(7));
