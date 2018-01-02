#! /usr/bin/perl
# ==================================================
use warnings;
use strict;

# ==================================================

# ============= Getting IP from text file ==========
my $filename = "/home/root/wifiAutoconnect.txt";
open(my $fh, "<", $filename)   
    or die "Could not open file '$filename' $!";

# ========== Getting data from first line ==========
my $row = <$fh>;
# =============== Splitting after = sign ===========
my ($IP_01) = (split /=/, $row)[1];
# =============== Splitting before , sign ==========
my ($IP_02) = (split /,/, $IP_01)[0];

# ==================================================
my $funcFile     = "/www/pages/functionality.js";
my $tempFuncFile = "/www/pages/tempfunc.js";

# ============ Opening first files =================
open my $inFirst,  '<', $funcFile       or die "Can't read old file: $!";
open my $outFirst, '>', "$tempFuncFile" or die "Can't write new file: $!";

# ===== Print the lines before the IP, to temp =====
while( <$inFirst>) {
    print $outFirst $_;
    last if $. == 9;
}

# ===== Print the entire line with the new IP ======
my $newIP = "    myRequest.open('GET','http://$IP_02/final.csv');\n";

# ============= Printing IP to $funcFile ===========
print $outFirst $newIP;

# ===== Print the lines after the IP, to temp ======
while( <$inFirst> ) {
    next if $. == 10;
    print $outFirst $_;
}

# ================== Closing first files ===========
close $inFirst;
close $outFirst;

# ==================================================

# ============== Opening second files ==============
open my $inSecond,  '<', $tempFuncFile or die "Can't read  old file: $!";
open my $outSecond, '>', "$funcFile"   or die "Can't write new file: $!";

# ======= Printing temp file to functionality ======
print("Printing $tempFuncFile to $funcFile \n");
while( <$inSecond> ) {
    print $outSecond $_;
}

# ================= Closing second files ===========
close $inSecond;
close $outSecond;

# ==================================================