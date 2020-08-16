const { cpf, cnpj } = require("cpf-cnpj-validator")
const luhn = require("luhn");

class validfy {

	static email(email) {

		if(email.includes("@") && email.includes(".")) {

			return true

		} else {

			return false
		}

	}

	static cpf(cpf_number) {

		return cpf.isValid(cpf_number)

	}

	static cnpj(cnpj_number) {

		return cnpj.isValid(cnpj_number)

	}

	static creditcard(creditcard) {

		return luhn.validate(creditcard)

	}

	static is_bigger_than(thing, another_thing) {

		if(thing.length > another_thing.length) {

			return true

		} else {

			return false 

		}
		
	}

	static is_smaller_than(thing, another_thing) {

		if(thing.length < another_thing.length) {

			return true

		} else {

			return false 
			
		}
		
	}

}

module.exports = validfy