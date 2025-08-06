import { createClient } from '@supabase/supabase-js'
import { ref, readonly } from 'vue'

interface CandleInsert {
  name: string | null
  message: string | null
}

interface Candle {
  id: number
  name: string | null
  message: string | null
  created_at: string
}

interface CandleResponse {
  status: string
  candle: Candle
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

// Shared reactive state for candles
const candles = ref<Candle[]>([])
const pending = ref(false)
const error = ref<string | null>(null)

export const useCandles = () => {
  const insertCandle = async (candleData: {
    name?: string
    message?: string
  }): Promise<CandleResponse> => {
    // Check if Supabase is properly configured
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase configuration is missing')
    }

    const newCandle: CandleInsert = {
      name: candleData.name?.trim() || null,
      message: candleData.message?.trim() || null,
    }

    const { data, error } = await supabase.from('candles').insert([newCandle]).select().single()

    if (error) throw error

    return { status: 'ok', candle: data }
  }

  const fetchCandles = async () => {
    pending.value = true
    error.value = null

    try {
      // Check if Supabase is properly configured
      if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase configuration is missing')
      }

      const { data, error: fetchError } = await supabase
        .from('candles')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError

      candles.value = data || []
    } catch (err) {
      error.value = 'Could not load tributes. Please try again later.'
      console.error('Error fetching candles:', err)
      // Set empty array so the component doesn't break
      candles.value = []
    } finally {
      pending.value = false
    }
  }

  const addCandleToList = (newCandle: Candle) => {
    // Add new candle to the beginning of the list
    candles.value.unshift(newCandle)
  }

  return {
    insertCandle,
    fetchCandles,
    addCandleToList,
    candles: readonly(candles),
    pending: readonly(pending),
    error: readonly(error),
  }
}
