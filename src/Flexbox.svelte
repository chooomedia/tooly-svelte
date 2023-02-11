<script>
	let showLeft = true;
</script>

<div class="flexbox row et_pb_row et_pb_row_1 et_pb_equal_columns et_pb_gutters1">
	<div class="col-lg-6 col-xs-12 et_pb_column et_pb_column_1_2 et_pb_column_1">
		<slot name="left">
		</slot>
	</div>
	<div class="col-lg-6 col-xs-12 et_pb_column et_pb_column_1_2 et_pb_column_2">
		<slot name="right1">
		</slot>
		<slot name="right2">
		</slot>
		<slot name="right3">
		</slot>
	</div>
</div>