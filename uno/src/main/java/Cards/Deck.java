package Cards;

import java.util.Collections;
import java.util.LinkedList;
import java.util.Random;

public class Deck {
    private final LinkedList<Card> cards = new LinkedList<>();
    private final LinkedList<Card> discard = new LinkedList<>();
    private final Random random = new Random();


    public Deck() {
        for (var color : Colors.values()) {
            for (var face : Faces.values()) {
                if (face.getValue() == 50) {
                    cards.add(new Card(face, Colors.RED));
                } else {
                    cards.add(new Card(face, color));
                    cards.add(new Card(face, color));
                }

            }
        }
        Collections.shuffle(cards);
    }

    public Card draw() {
        if (cards.size() == 0) {
            recycleDeck();
        }
        var card = cards.getLast();
        cards.remove(card);
        return card;
    }

    private void recycleDeck() {
        System.out.println("\n.....DECK IS BEING SHUFFLED.....\n");
        var referee = getTopDiscardCard();
        discard.remove(getTopDiscardCard());
        cards.addAll(discard);
        Collections.shuffle(cards);
        discard.clear();
        discard.add(referee);
    }

    public LinkedList<Card> getCards() {
        return cards;
    }

    public void shuffle() {
        Collections.shuffle(discard);
    }

    public LinkedList<Card> getDiscard() {
        return discard;
    }

    public Card getTopDiscardCard() {
        return discard.get(this.discard.size() - 1);
    }

    }

    //get top card and remove that card from deck
    //shuffle- collections.shuffle- list
    //draw and discard piles
    //draw pile- if size 0, shuffle discard, draw=discard
