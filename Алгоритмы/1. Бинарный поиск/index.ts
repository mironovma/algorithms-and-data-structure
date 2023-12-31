/**
 * @param arr Отсортированный массив числе
 * @param value Искомое значение
 */
const binarySearch = (arr: number[], value: number) => {
  // Указываем начальную точку и конечную.
  let start = 0;
  let end = arr.length;

  /**
   * Зададим переменную, в которую будут записываться
   * кол-во итераций на каждой попытке поиска числа.
   */
  let attempt = 0;

  /**
   * Запускаем цикл до тех пор,
   * пока не закончится весь массив чисел.
   */
  while (start <= end) {
    // Ищем середину массива и округляем ее (т.к. может получиться не целое число)
    let middle = Math.floor((start + end) / 2);

    // Если искомое значение совпадает с средним числом, то отдаем результат
    if (value === arr[middle]) {
      attempt += 1;
      return { value: middle, attempt };
    }

    /**
     * Если искомое число меньше среднего в массиве,
     * то перезаписываем конечную точку убирая всю правую
     * половину массива.
     */
    if (value < arr[middle]) {
      attempt += 1;
      end = middle - 1;
    } else {
      /**
       * Иначе перезаписываем стартовую точку, отбрасывая
       * всю левую сторону массива.
       */
      attempt += 1;
      start = middle + 1;
    }
  }

  /**
   * Если цикл закончится, а число не будет найдено,
   * значит, такого числа в массиве нет.
   */
  return { value: -1, attempt };
};

const linearSearch = (arr: number[], value: number) => {
  let attempt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (value === i) {
      return { value: --i, attempt };
    }
    attempt += 1;
  }
};

const arrayNumber = Array(10000)
  .fill(1)
  .map((_, index) => ++index);

// { индекс искомого числа, кол-во итераций поиска }
console.log(binarySearch(arrayNumber, 1452));
console.log(linearSearch(arrayNumber, 1452));
