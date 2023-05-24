// HomePage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCurrentAirPollution } from './airPollutionSlice';
import LOCATIONS from './Locations';
import Filter from './Filter';

