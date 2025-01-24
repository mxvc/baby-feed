export function formatDate(date) {
	if(date==null){
		return null
	}
	if(!(date instanceof Date)){
		const d = new Date()
		d.setTime(date)
		date = d
	}
	console.log('formateDate', date)
  let year = date.getFullYear();
  let month = date.getMonth() + 1; // 月份从0开始，所以需要加1
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // 格式化月份、日期、小时和分钟，确保它们是两位数
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

 // return `${year}年${month}月${day}日${hours}:${minutes}`;
  return `${month}月${day}日 ${hours}:${minutes}`;
}


export function formatFullDay(date) {
    if(date==null){
        return null
    }
    if(!(date instanceof Date)){
        const d = new Date()
        d.setTime(date)
        date = d
    }
    console.log('formateDate', date)
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // 月份从0开始，所以需要加1
    let day = date.getDate();

    // 格式化月份、日期、小时和分钟，确保它们是两位数
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}年${month}月${day}日`;
}

export function formatTime(date) {
	if(date==null){
		return null
	}
	if(!(date instanceof Date)){
		const d = new Date()
		d.setTime(date)
		date = d
	}
	console.log('formateDate', date)
  let year = date.getFullYear();
  let month = date.getMonth() + 1; // 月份从0开始，所以需要加1
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // 格式化月份、日期、小时和分钟，确保它们是两位数
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

 // return `${year}年${month}月${day}日${hours}:${minutes}`;
  return `${hours}:${minutes}`;
}

export function pastTime(date){
  const now = new Date()

  const dif = now.getTime() - date.getTime(); // 毫秒

  const seconds = dif / (1000  )
  const minutes = dif / (1000 * 60 )

  const hours = dif / (1000 * 60 * 60)
  const days = dif / (1000 * 60 * 60 * 24)

  if(days > 1){
	  return days.toFixed(0) + '天'
  }
  if(hours > 1){
	  return Math.floor( hours).toFixed(0) + '小时'+ (minutes % 60).toFixed(0) +'分'
  }
  if(minutes > 1){
	    return minutes.toFixed(0) + '分'
  }

  return seconds.toFixed(0) + '秒'
}



export function isIn24Hours(date){
    const now = new Date()

    const dif = now.getTime() - date.getTime(); // 毫秒

    const seconds = dif / (1000  )
    const minutes = dif / (1000 * 60 )

    const hours = dif / (1000 * 60 * 60)
    const days = dif / (1000 * 60 * 60 * 24)
    return days <=1


}

export function isIn6Hours(date){
    const now = new Date()

    const dif = now.getTime() - date.getTime(); // 毫秒

    const hours = dif / (1000 * 60 * 60)
    return hours <=6
}
