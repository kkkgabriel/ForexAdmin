class Ctime {
	constructor() {
		this.year = null
		this.month = null
		this.day = null
		this.hours = null
		this.minutes = null
		this.seconds = null
	}

	from_datetime_string(datetime_string) {
		this.year = datetime_string.slice(0, 4)
		this.month = datetime_string.slice(4, 6)
		this.day = datetime_string.slice(6, 8)
		this.hours = datetime_string.slice(8, 10)
		this.minutes = datetime_string.slice(10, 12)
		this.seconds = datetime_string.slice(12, 14)

		return this
	}

	from_date_obj (date) {

		this.year = date.getFullYear()
		this.month = ("0" + (date.getMonth()+1)).slice(-2)
		this.day = ("0" + date.getDate()).slice(-2);
		this.hours = ("0" + date.getHours()).slice(-2);
		this.minutes = ("0" + date.getMinutes()).slice(-2);
		this.seconds = ("0" + date.getSeconds()).slice(-2);

		return this
	}

	to_datetime_string() {
		return this.year + this.month + this.day + this.hours + this.minutes + this.seconds
	}

	to_date_string() {
		return this.year + this.month + this.day
	}

	to_time_string() {
		return this.hours + this.minutes + this.seconds
	}

	to_display_time() {
		return this.hours + ':' + this.minutes + ':' + this.seconds
 	}

}

export default Ctime;