package Cards;

public class Game {

    public static void main(String[] args) {

        Deck deck = new Deck();
        Player player = new Player(deck);

        App app = new App(deck, player);

        app.play();
    }
}