/**
 * Created by a.shrikrishna.pethe on 7/15/2024.
 */

import { LightningElement, api } from "lwc";
import LightningAlert from "lightning/alert";
export default class Child extends LightningElement {
	@api
	async sayHi() {
		await LightningAlert.open({
			message: "Hello Trailblazer!",
			theme: "success",
			label: "Greetings"
		});
		console.log("Alert modal has been closed");
	}
}