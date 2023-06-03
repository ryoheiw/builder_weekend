
import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'
import credentials from "../credentials.json"

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const response = await axios.post("https://www.googleapis.com/calendar/v3/calendars/calendarId/events")
  const api_key = "AIzaSyD6qXWXnaybuRo-P0LLXxRj-NNjHmMHmN4"
  console.log(response)
}