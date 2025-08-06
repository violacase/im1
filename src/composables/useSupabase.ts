import { createClient } from '@supabase/supabase-js'

interface CandleInsert {
  name: string | null
  message: string | null
}

interface Candle {
  id?: number
  name: string | null
  message: string | null
  // Add other fields as needed based on your 'candles' table schema
}

interface CandleResponse {
  status: string
  candle: Candle | null
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export const useCandlesApi = () => {
  const insertCandle = async (candleData: {
    name?: string
    message?: string
  }): Promise<CandleResponse> => {
    const newCandle: CandleInsert = {
      name: candleData.name?.trim() || null,
      message: candleData.message?.trim() || null,
    }

    const { data, error } = await supabase.from('candles').insert([newCandle]).select().single()

    if (error) throw error

    return { status: 'ok', candle: data }
  }

  return { insertCandle }
}
