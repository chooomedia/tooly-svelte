<script>
	let showLeft = true;
</script>

<div id="flexbox" class="row et_pb_row et_pb_row_1 et_pb_equal_columns et_pb_gutters1">
	<div class="col-lg-6 col-xs-12 et_pb_column et_pb_column_1_2 et_pb_column_1 flex-column center"
		style="flex:{showLeft?3:0}">
		<slot name="left">
		</slot>
	</div>
	<div class="col-lg-6 col-xs-12 et_pb_column et_pb_column_1_2 et_pb_column_2 flex-column center">
		<slot name="right1">
		</slot>
		<slot name="right2">
		</slot>
		<slot name="right3">
		</slot>
	</div>
</div>

<style>
	@media screen and (max-width:768px) {
		.flex-column {
			max-width: 90%;
			margin: 0 auto;
			text-align: center;
		}
	}
</style>