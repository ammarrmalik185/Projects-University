package com.ammar.armsmanager;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;
import android.widget.TextView;
import android.view.View;
import android.widget.Toast;

public class addActivity extends AppCompatActivity {

    String[] identifiers;
    EditText edit_1;
    EditText edit_2;
    EditText edit_3;
    EditText edit_4;
    String mode;
    valuesCommander values;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.add_activity);
        Bundle mode_handler = getIntent().getExtras();
        mode = mode_handler.getString("mode");
        values = new valuesCommander();
        values.generate_dud_records();

        String[] identifiers_w = {"Model Name", "Manufacturer Name", "Country", "Price"};
        String[] identifiers_d = {"Dealer Name", "Country","Contact no", "Rating"};
        String[] identifiers_c = {"Customer Name",  "Country","Contact no", "Licence no"};

        if (mode.equals("w"))
            identifiers = identifiers_w;
        else if (mode.equals("d"))
            identifiers = identifiers_d;
        else if (mode.equals("c"))
            identifiers = identifiers_c;

        edit_1 = findViewById(R.id.editText);
        edit_2 = findViewById(R.id.editText2);
        edit_3 = findViewById(R.id.editText3);
        edit_4 = findViewById(R.id.editText5);

        TextView text_1 = findViewById(R.id.textView4);
        TextView text_2 = findViewById(R.id.textView2);
        TextView text_3 = findViewById(R.id.textView3);
        TextView text_4 = findViewById(R.id.textView5);

        text_1.setText(identifiers[0]);
        text_2.setText(identifiers[1]);
        text_3.setText(identifiers[2]);
        text_4.setText(identifiers[3]);

    }

    public void add_submit_process(View view){

        String identifier = edit_1.getText().toString();
        String value_2 = edit_2.getText().toString();
        String value_3 = edit_3.getText().toString();
        String value_4 = edit_4.getText().toString();

        if (mode.equals("w")) {
            try {
                Integer.parseInt(value_4);
                if (values.Wexists(identifier) != -1) {
                    values.weaponRecords.get(values.Wexists(identifier)).modifyInfo(value_2, value_3, Integer.parseInt(value_4));
                    Toast.makeText(addActivity.this, "Existing Weapon Edited", Toast.LENGTH_LONG).show();
                    values.totalupdate();
                } else {
                    values.addnewWeapon(identifier, value_2, value_3, Integer.parseInt(value_4));
                    Toast.makeText(addActivity.this, "New Weapon Added", Toast.LENGTH_LONG).show();
                }

            } catch (Exception e) {
                Toast.makeText(addActivity.this, "Invalid Price", Toast.LENGTH_LONG).show();
            }
        }
        else if(mode.equals("d")){
            if (values.Dexists(identifier) != -1) {
                values.dealerRecords.get(values.Dexists(identifier)).modifyInfo(value_2, value_3, value_4);
                Toast.makeText(addActivity.this, "Existing Dealer Edited", Toast.LENGTH_LONG).show();
                values.totalupdate();
            } else {
                values.addnewDealer(identifier, value_2, value_3, value_4);
                Toast.makeText(addActivity.this, "New Dealer Added", Toast.LENGTH_LONG).show();
            }

        }
        else if(mode.equals("c")){
            if (values.Cexists(identifier) != -1) {
                values.customerRecords.get(values.Cexists(identifier)).modifyInfo(value_2, value_3, value_4);
                Toast.makeText(addActivity.this, "Existing Customer Edited", Toast.LENGTH_LONG).show();
                values.totalupdate();
            } else {
                values.addnewCustomer(identifier,value_2,value_3,value_4);
                Toast.makeText(addActivity.this, "New Customer Added", Toast.LENGTH_LONG).show();
            }

        }
    }
}
