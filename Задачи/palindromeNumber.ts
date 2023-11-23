/**
 * Дано число x. Нужно вернуть true, если число является
 * палиндромом (т.е. число будет таким же при чтении слева направо и справа налево).
 *
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Follow up*: Решить без конвертирования числа в строку.
 */

/**
 * Простой вариант с преобразованием в строку
 */
const isPalindromeSimple = function (x: number) {
  return +String(x).split("").reverse().join("") === x;
};

console.log(isPalindromeSimple(121));
console.log(isPalindromeSimple(120));
console.log(isPalindromeSimple(-120));
console.log(isPalindromeSimple(10));

const isPalindrome = function (x: number) {
  /**
   * Сразу выполняем проверку на отрицательные числа.
   * Любые отрицательные числа не будут являться палиндромом.
   * -121 !== 121-
   *
   * Кроме этого, числа, оканчивающиеся на 0 тоже не будут палиндромами.
   */
  if (x < 0 || x % 10 === 0) {
    return false;
  }
  /**
   * Создаем переменную под реверснутое число
   */
  let reversed = 0;
  /**
   * Сохраняем изначальное число
   */
  let original = x;

  /**
   * Запускаем while до тех пор, пока original больше 0
   */
  while (original > 0) {
    /**
     * Умножаем reversed на 10 и прибавляем остаток от деления original.
     * Т.е. здесь мы "сдвигаем цифры" reversed на одну позицию влево и
     * добавляем последнюю цифру из original в конец.
     */
    reversed = reversed * 10 + (original % 10);
    /**
     * Затем изменяем original, разделив его на 10 и округляем.
     * Это позволяет удалить последнюю цифру из original, т.к.
     * мы уже использовали ее в reversed.
     */
    original = Math.floor(original / 10);
    /**
     * Приведу подробный расчет:
     * 1 итерация цикла:
     * rev = 0 * 10 + 121 % 10 = 0 + 1 = 1;
     * ori = 121 / 10 = 12;
     * 2 итерация цикла:
     * rev = 1 * 10 + 12 % 10 = 10 + 2 = 12;
     * ori = 12 / 10 = 1;
     * 3 итерация цикла:
     * rev = 12 * 10 + 1 % 10 = 120 + 1 = 121.
     */
  }
  /**
   * Таким образом, на каждой итерации цикла мы берем последнюю
   * цифру из original и добавляем ее в конец reversed, путем
   * умножения reversed на 10 и прибавления остатка от деления original на 10.
   *
   * Затем мы удаляем эту последнюю цифру из original.
   * Повторяя этот процесс до тех пор, пока original не станет равным 0,
   * мы получаем перевернутое число reversed.
   *
   * Далее просто сравниваем перевернутое число с исходным x.
   */

  return x === reversed;
};

console.log(isPalindrome(121));
console.log(isPalindrome(120));
console.log(isPalindrome(-120));
