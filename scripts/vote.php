<html>
  <head>
    <title>Results of the Vote</title>
	<style>
	  td, tr, table {
		  border: 1px solid black;
	  }
	  
	  table {
		  margin-left: auto;
		  margin-right: auto;
	  }
	  
	  h2 {
		  text-align: center;
	  }
	</style>
  </head>
  <body bgcolor="#CCFFCC" text="330099">
    <?php
#error_reporting(E_ALL);
#ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  #get the value
  $choice = $_POST['choice'];

  #security locks
  $fp = fopen("vote.dat", "r+b");
  $flock = flock($fp, LOCK_EX);

  #Count variables
  $tarocount = (int)fgets($fp, 80);
  $shinichicount = (int)fgets($fp, 80);
  $harukacount = (int)fgets($fp, 80);
  $tsubasacount = (int)fgets($fp, 80);
  $jirocount = (int)fgets($fp, 80);

  #increment variables
  if ($choice == "taro") {
    $tarocount = $tarocount + 1;
  } else if ($choice == "shinichi") {
    $shinichicount = $shinichicount + 1;
  } else if ($choice == "haruka") {
    $harukacount = $harukacount + 1;
  } else if ($choice == "tsubasa") {
    $tsubasacount = $tsubasacount + 1;
  } else if ($choice == "jiro") {
    $jirocount = $jirocount + 1;
  } else {
    # if the user didn't vote, don't increment anything
  }

  # put the five numbers back in the file, one per line
  fseek($fp, 0);
  fwrite($fp, "$tarocount\n$shinichicount\n$harukacount\n$tsubasacount\n$jirocount\n");

  flock($fp, LOCK_UN);
  fclose($fp);

  if ($choice == "taro") {
    echo "<h2>You voted for Taro Momoi(aka Don Momotaro)!</h2> \n";
  } else if ($choice == "shinichi") {
    echo "<h2>You voted for Shinichi Saruhara(aka Saru Brother)!</h2> \n";
  } else if ($choice == "haruka") {
    echo "<h2>You voted for Haruka Kito(aka Oni Sister)!</h2>\n";
  } else if ($choice == "tsubasa") {
    echo "<h2>You voted for Tsubasa Inuzuka(aka Inu Brother)!</h2> \n";
  } else if ($choice == "jiro") {
    echo "<h2>You voted for Jiro Momotani(aka Don Doragoku)!</h2> \n";
  } else {
    echo "<h2>You didn't vote!</h2>\n";
  }
}
?>

	  <table>
	    <tr>
		  <td>Taro Momoi</td>
		  <td><?php echo $tarocount; ?></td>
		</tr>
		<tr>
		  <td>Shinichi Saruhara</td>
		  <td><?php echo $shinichicount; ?></td>
		</tr>
		<tr>
		  <td>Haruka Kito</td>
		  <td><?php echo $harukacount; ?></td>
		</tr>
		<tr>
		  <td>Tsubasa Inuzuka</td>
		  <td><?php echo $tsubasacount; ?></td>
		</tr>
		<tr>
		  <td>Jiro Momotani</td>
		  <td><?php echo $jirocount; ?></td>
		</tr>
	  </table>
   </body>
<html>