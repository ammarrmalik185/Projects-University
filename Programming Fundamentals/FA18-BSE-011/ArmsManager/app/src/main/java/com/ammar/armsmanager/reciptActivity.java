package com.ammar.armsmanager;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class reciptActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_recipt);
        Bundle b = getIntent().getExtras();
        String recipt = b.getString("recipt");
        TextView recipt_display = findViewById(R.id.recipt);
        recipt_display.setText(recipt);
    }
}
