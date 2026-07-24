import type { Complaint } from '@/types/complaint';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ComplaintState {
  complaint: Complaint | null;
  loading: boolean;
}

const initialState: ComplaintState = {
  complaint: null,
  loading: false,
}

const complaintSlice = createSlice({
  name: "complaint",

  initialState,

  reducers: {
    setComplaint(state, action: PayloadAction<Complaint>) {
      state.complaint = action.payload;
    },

    clearComplaint(state) {
      state.complaint = null;
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  }
});

export const { setComplaint, clearComplaint, setLoading } = complaintSlice.actions;

export default complaintSlice.reducer;
