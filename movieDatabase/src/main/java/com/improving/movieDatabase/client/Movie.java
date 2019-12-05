package com.improving.movieDatabase.client;

public class Movie {
    private String name;
    private String director;
    private String genre;
    private int releaseYear;
    private int id;


    public Movie(String name, String director, String genre, int releaseYear, int id) {
        this.name = name;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.id = id;
    }
    public String getName() {
        return name;
    }

    public String getDirector() {
        return director;
    }
    public String getGenre() {
        return genre;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public int getId() {
        return id;
    }

}

