import { toTimeStamp } from './util'

export const compareFn = ({ priority, propertyName }) => {
  return (object1, object2) => {
    if (priority && (object1[priority] || object2[priority])) {
      return 1
    }
    let value1 = toTimeStamp(object1[propertyName])
    let value2 = toTimeStamp(object2[propertyName])
    // 降序排列
    return value1 < value2 ? 1 : value1 > value2 ? -1 : 0
  }
}
