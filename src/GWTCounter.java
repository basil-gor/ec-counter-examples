import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;

/*
* This component keeps track of a count, and displays it on a label.
* The count can be incremented and decremented using the increment and decrement methods, respectively.
* */
public class GWTCounter extends Composite {
    private int count = 0;
    private Label countLabel = new Label();
    private VerticalPanel panel = new VerticalPanel();
    private Button decrementButton = new Button("-");
    private Button incrementButton = new Button("+");

    public Counter() {
        countLabel.setText("Count: " + count);
        decrementButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                count--;
                countLabel.setText("Count: " + count);
            }
        });
        incrementButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                count++;
                countLabel.setText("Count: " + count);
            }
        });

        panel.add(decrementButton);
        panel.add(countLabel);
        panel.add(incrementButton);
        initWidget(panel);
    }
}