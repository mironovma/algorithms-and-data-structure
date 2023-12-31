/**
 * Есть массив чисел и таргет.
 * Нужно найти два числа из массива, которые дают сумму таргета.
 * Одно и то же число можно использовать только один раз.
 */

// Time: O(n) - т.к. у нас внутри только один цикл
// Space: O(n)
const twoSum2 = (nums: number[], target: number) => {
  /**
   * Создаем новую коллекцию, в которую будем
   * записывать числа в формате { число: индекс }
   */
  const collection = new Map();

  // Проходим циклом по всему массиву
  for (let i = 0; i < nums.length; i++) {
    /**
     * искомое число (target) = x + y
     *
     * Начинаем итерацию по массиву.
     * У нас появляется первое текущее число - cur (напр., 2).
     * Получаем, что
     * искомое число = x + cur.
     *
     * Уже что-то. Нам известно искомое число по условию (9) и есть текущее (cur = 2).
     * Можем найти второе недостающее число так:
     * x = target - cur.
     *
     * Остается только проверить есть ли такое число x в массиве.
     * См. далее.
     *
     * В нашей коллекции Map ничего нет. Значит, запишем такое число туда:
     * mapCollection.set(число-в-массиве, индекс этого числа)
     * Запомним его в нашей коллекции. По сути, перезаписываем текущий входной массив в коллекцию.
     *
     * Так делаем (записывае мчисла в нашу коллекцию), пока идем по массиву.
     *
     * Вместе с этим, перед записью числа в коллекцию, на каждой итерации
     * выполняем проверку:
     * есть ли в нашей коллекции такое число x? (target - cur = x)
     * (9 - 2 = 7 – число x)
     * Если есть (на первой итерации точно его не будет, а только на последующих),
     * то возвращаем ответ: массив, в котором будут:
     * индекс числа из коллекции (коллекция[x], что по map'у вернет значение индекса)
     * и индекс числа, на которой в текущий момент выполняем итерацию.
     */
    const cur = nums[i];
    // cur + x = target - solution!
    // x = target - cur
    const x = target - cur;
    /**
     * Если в нашей коллекции есть такое число x, которое
     * в сумме с cur давало бы target, то это и будет ответом.
     */
    if (collection.has(x)) {
      return [collection.get(x), i];
    }
    /**
     * Если в коллекции нет такого числа, то записываем его
     */
    collection.set(cur, i);
  }
};

console.log(twoSum2([2, 7, 11, 15], 9)); // [ 0, 1 ]
