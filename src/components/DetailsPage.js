// DetailsPage.js
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentAirPollution, selectData } from './airPollutionSlice';
import LOCATIONS from './Locations';
