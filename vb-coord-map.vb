Dim row, col, tmp As Integer
Dim ratio, ras As Double
row = DataGridView1.RowCount
col = DataGridView1.ColumnCount
ratio = Math.PI / 180

Dim latDeg, latMin, lngDeg, lngMin As Double
Dim MasCoord(col, row), RasMas(row, row) As Double

For tmp = 0 To row - 1
	For row = 0 To row - 1
		' Assuming Latitude Degrees at column index 2
		latDeg = 1.0 * Val(DataGridView1.Item(2, row).Value)
		latMin = 1.0 * Val(DataGridView1.Item(3, row).Value)
		lngDeg = 1.0 * Val(DataGridView1.Item(4, row).Value)
		lngMin = 1.0 * Val(DataGridView1.Item(5, row).Value)
		ras = Math.Acos(
			Math.Sin((latDeg + latMin / 60) * ratio) * 
			Math.Sin((latDeg + latMin / 60) * ratio) 
			+ 
			Math.Cos((latDeg + latMin / 60) * ratio) * 
			Math.Cos((latDeg + latMin / 60) * ratio) * 
			Math.Cos((lngDeg + lngMin / 60) * ratio - (lngDeg + lngMin / 60) * ratio)
		) * 6371
		RasMas(row, tmp) = ras
	Next
Next
