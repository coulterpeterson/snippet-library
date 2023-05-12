/**
 * Gravity Wiz // Gravity Forms Address Autocomplete // Require User to Autofill At Least Once
 * https://gravitywiz.com/documentation/gravity-forms-address-autocomplete/
 *
 * Hides a required field you add to your form, and fills it with a value only if the user successfully autofills
 * in the form at least once.
 * 
 * Instructions:
 *
 * 1. Install this snippet with our free Custom JavaScript plugin.
 *    https://gravitywiz.com/gravity-forms-custom-javascript/
 *
 * 2. Create a required single line text field in your form, and note its ID.
 * 
 * 3. Replace the 4s in the snippet below with your field ID.
 */

document.querySelector('#field_GFFORMID_4').style.display = "none";
gform.addAction( 'gpaa_fields_filled', () => {
    document.querySelector('input[name="input_4"]').value = "true";
} );
