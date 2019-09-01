import moment from 'moment'

export const format = (date, format = 'dddd, MMMM Do YYYY') => moment(date).format(format)

export const fromNow = date => moment().diff( date, 'days') * -1;
