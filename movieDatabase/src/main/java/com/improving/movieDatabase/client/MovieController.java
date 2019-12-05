package com.improving.movieDatabase.client;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class MovieController {

        private final MovieRepository movieRepository ;

//        public MovieController() { }

        public MovieController(MovieRepository movieRepository) {
            this.movieRepository = new MovieRepository();
        }

        @GetMapping("/movies")
        public List<Movie> movies() {
            return movieRepository.getMovies();
        }
    }
