import type { Localize, LocalizeFn, QuarterIndex } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['BC', 'AC'] as const,
  abbreviated: ['きげんぜん', 'せいれき'] as const,
  wide: ['きげんぜん', 'せいれき'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'] as const,
  wide: [
    'だい1しはんき',
    'だい2しはんき',
    'だい3しはんき',
    'だい4しはんき',
  ] as const,
}

const monthValues = {
  narrow: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ] as const,
  abbreviated: [
    '1がつ',
    '2がつ',
    '3がつ',
    '4がつ',
    '5がつ',
    '6がつ',
    '7がつ',
    '8がつ',
    '9がつ',
    '10がつ',
    '11がつ',
    '12がつ',
  ] as const,
  wide: [
    '1がつ',
    '2がつ',
    '3がつ',
    '4がつ',
    '5がつ',
    '6がつ',
    '7がつ',
    '8がつ',
    '9がつ',
    '10がつ',
    '11がつ',
    '12がつ',
  ] as const,
}

const dayValues = {
  narrow: ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'] as const,
  short: ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'] as const,
  abbreviated: ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'] as const,
  wide: [
    'にちようび',
    'げつようび',
    'かようび',
    'すいようび',
    'もくようび',
    'きんようび',
    'どようび',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや',
  },
  abbreviated: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや',
  },
  wide: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや',
  },
}
const formattingDayPeriodValues = {
  narrow: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや',
  },
  abbreviated: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや',
  },
  wide: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  dirtyOptions
) => {
  const number = Number(dirtyNumber)

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   const options = dirtyOptions || {}
  //   const unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  const options = dirtyOptions || {}
  const unit = String(options.unit)

  switch (unit) {
    case 'year':
      return `${number}ねん`
    case 'quarter':
      return `だい${number}しはんき`
    case 'month':
      return `${number}がつ`
    case 'week':
      return `だい${number}しゅう`
    case 'date':
      return `${number}にち`
    case 'hour':
      return `${number}じ`
    case 'minute':
      return `${number}ふん`
    case 'second':
      return `${number}びょう`
    default:
      return `${number}`
  }
}

const localize: Localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: (quarter) => (Number(quarter) - 1) as QuarterIndex,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}

export default localize
