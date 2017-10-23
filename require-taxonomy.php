<?php
/*
Plugin Name: Require Taxonomy
Description: Makes the bio type taxonomy required for bio post types.
Author: John Spellman
*/

// Load admin scripts & styles
function rct_load_admin_scripts() {
	global $post_type;
	if ( 'bio' == $post_type ) {
		wp_enqueue_script( 'rct_admin_script', plugin_dir_url( __FILE__ ) . 'js/require-taxonomy.js', array( 'jquery' ) );
	}
}

add_action( 'admin_enqueue_scripts', 'rct_load_admin_scripts' );