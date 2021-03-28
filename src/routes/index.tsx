import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Dashboard from '../screens/Dashboard';
import SelectProfile from '../screens/SelectProfile';
import ApplicationSettings from '../screens/ApplicationSettings';
import SearchFilm from '../screens/SearchFilm';
import WatchList from '../screens/WatchList';
import Original from '../screens/Original';
import Films from '../screens/Films';
import Series from '../screens/Series';
import BrandDisneyFilmPage from '../screens/BrandDisneyFilmPage';
import BrandPixarFilmPage from '../screens/BrandPixarFilmPage';
import BrandMarvelFilmPage from '../screens/BrandMarvelFilmPage';
import BrandStarWarsFilmPage from '../screens/BrandStarWarsFilmPage';
import BrandNationalGeographicFilmPage from '../screens/BrandNationalGeographicFilmPage';
import WandavisionPageFilm from '../screens/WandavisionPageFilm';
import GroupWatch from '../screens/GroupWatch';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/select-profile" component={SelectProfile} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/application-settings" component={ApplicationSettings} />
      <Route path="/search-film" component={SearchFilm} />
      <Route path="/watchlist" component={WatchList} />
      <Route path="/original" component={Original} />
      <Route path="/films" component={Films} />
      <Route path="/series" component={Series} />
      <Route path="/disney-films" component={BrandDisneyFilmPage} />
      <Route path="/pixar-films" component={BrandPixarFilmPage} />
      <Route path="/marvel-films" component={BrandMarvelFilmPage} />
      <Route path="/starwars-films" component={BrandStarWarsFilmPage} />
      <Route path="/wandavision-page-film" component={WandavisionPageFilm} />
      <Route path="/group-watch" component={GroupWatch} />
      <Route
        path="/national-geographic-films"
        component={BrandNationalGeographicFilmPage}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
