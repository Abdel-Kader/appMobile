import axios from 'axios';
import {API_URL} from '../config';

export function addProject(project) {
  axios
    .post(API_URL, {
      numero: project.numero,
      nom: project.nom,
      type: project.type,
      latitude: project.lat,
      longitude: project.lng,
      dateExec: project.date,
      image: project.media,
      // productId: message.productId
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response.data.error.message;
    });
}
